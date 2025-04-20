<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;

class ChatThread extends Model
{
    public function participants(): BelongsToMany
    {
        return $this->belongsToMany(User::class, 'thread_participants', 'thread_id', 'user_id');
    }

    public function messages()
    {
        return $this->hasMany(Message::class);
    }
}
