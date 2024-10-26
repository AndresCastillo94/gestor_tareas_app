<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Task extends Model
{
    use HasFactory;

    public function task_priority(){
        return $this->belongsTo(TaskPriority::class);
    }

    public function task_status(){
        return $this->belongsTo(TaskStatus::class);
    }

    public function user(){
        return $this->belongsTo(User::class);
    }

}
