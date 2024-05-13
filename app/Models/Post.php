<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Post extends Model
{
    use HasFactory;

    protected $fillable = [
        'postname',
        'username',
        'reacts',
        'comments',
        'contacts',
        'share',
        'upload_time',
        'image',
        'qrcode',
        'gcash',
        'description', // Add this line
    ];

    public function getImageAttribute($value)
    {
        return asset('uploads/' . $value);
    }

    public function getQrcodeAttribute($value)
    {
        return asset('uploads/' . $value);
    }
}