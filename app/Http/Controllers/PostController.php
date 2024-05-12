<?php

namespace App\Http\Controllers;

use App\Models\Post;

use Illuminate\Http\Request;


class PostController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $posts = Post::all();
        return response()->json($posts, 200);
    }

    public function store(Request $request)
    {
        $request->validate([
            'postname' => 'required',
            'username' => 'required',
            'reacts' => 'required',
            'comments' => 'required',
            'contacts' => 'required',
            'share' => 'required',
            'image' => 'required|image|mimes:jpeg,png,jpg,gif,svg|max:2048',
            'qrcode' => 'required|image|mimes:jpeg,png,jpg,gif,svg|max:2048',
            'gcash' => 'required',
            'description' => 'required',
        ]);

        $imageName = time() . '.' . $request->image->extension();
        $request->image->move(public_path('uploads'), $imageName);

        $qrcodeName = time() . '.' . $request->qrcode->extension();
        $request->qrcode->move(public_path('uploads'), $qrcodeName);

        $post = Post::create([
            'postname' => $request->postname,
            'username' => $request->username,
            'reacts' => $request->reacts,
            'comments' => $request->comments,
            'contacts' => $request->contacts,
            'share' => $request->share,
            'image' => $imageName,
            'qrcode' => $qrcodeName,
            'gcash' => $request->gcash,
            'description' => $request->description,
        ]);

        return response()->json($post, 201);
    }

}