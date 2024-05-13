<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\UserController;
use App\Http\Controllers\PostController;


/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::post('/users', [UserController::class, 'store']);
Route::post('/login', [UserController::class, 'login']);
Route::get('/usersfetch', [UserController::class, 'getAllUsers']);
Route::put('/users/{id}', [UserController::class, 'update']);
Route::delete('/usersdelete/{id}', [UserController::class, 'delete']);

Route::get('/posts', [PostController::class, 'index']);
Route::post('/postsupload', [PostController::class, 'store']);
Route::delete('/postdelete/{id}', [PostController::class, 'softDelete']);
Route::put('/postrestore/{id}', [PostController::class, 'restore']);
Route::delete('/postforcedelete/{id}', [PostController::class, 'forceDelete']);