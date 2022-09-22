<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Message extends Model
{
    use HasFactory;

    /**
     * Get formatted created message time that depends on today time.
     */
    public function getFormattedCreatedTime()
    {
        if ($this->created_at->isToday()) {
            return $this->created_at->format('H:i');
        } else if ($this->created_at->isYesterday()) {
            return $this->created_at->shortEnglishDayOfWeek;
        }

        return $this->created_at->format('m.d');
    }

    /**
     * Get the author of the message.
     */
    public function author()
    {
        return $this->hasOne(User::class, 'id', 'user_id');
    }
}
