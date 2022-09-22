<?php

namespace App\Models;

use App\Models\Message;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Channel extends Model
{
    use HasFactory;

    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $fillable = ['name', 'iamge'];

    /**
     * Get the messages for the channel.
     */
    public function messages()
    {
        return $this->hasMany(Message::class);
    }

    /**
     * Get the last message of the channel.
     */
    public function lastMessage()
    {
        return $this->hasOne(Message::class)->latestOfMany();
    }
}
