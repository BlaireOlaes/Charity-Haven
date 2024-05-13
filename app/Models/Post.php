<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Post extends Model
{
    use HasFactory, SoftDeletes;

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
        'description',
    ];

    protected $dates = ['deleted_at'];

    public function getImageAttribute($value)
    {
        return asset('uploads/' . $value);
    }

    public function getQrcodeAttribute($value)
    {
        return asset('uploads/' . $value);
    }
}