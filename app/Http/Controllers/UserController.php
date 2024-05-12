<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use App\Models\User;

class UserController extends Controller
{
    public function store(Request $request)
    {
        $request->validate([
            'username' => 'required',
            'firstname' => 'required',
            'lastname' => 'required',
            'email' => 'required|email|unique:users,email', // Add unique rule
            'password' => 'required',
            'profile_pic' => 'image', // Validate that profile_pic is an image
        ]);

        $user = new User;
        $user->username = $request->username;
        $user->firstname = $request->firstname;
        $user->lastname = $request->lastname;
        $user->email = $request->email;
        $user->password = Hash::make($request->password);

        if ($request->hasFile('profile_pic')) {
            $imageName = time() . '.' . $request->profile_pic->extension();
            $request->profile_pic->move(public_path('uploads'), $imageName);
            $user->profile_pic = $imageName;
        }

        $user->save();

        return response()->json(['message' => 'User created successfully'], 201);
    }
    public function login(Request $request)
    {
        $user = User::where('email', $request->email)->first();

        if (!$user || !Hash::check($request->password, $user->password)) {
            return response()->json(['message' => 'Invalid Email or Password try again'], 401);
        }

        return response()->json(['message' => 'Logged in successfully'], 200);
    }
}