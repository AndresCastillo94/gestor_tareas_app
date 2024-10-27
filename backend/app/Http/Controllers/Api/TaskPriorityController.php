<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\TaskPriority;
use Illuminate\Http\Request;

class TaskPriorityController extends Controller
{
    public function index(){

        $task_priorities = TaskPriority::all();

        return $task_priorities;

    }

    public function show(TaskPriority $task_priority){

        return $task_priority;
        
    }

}
