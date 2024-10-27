<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\TaskStatus;
use Illuminate\Http\Request;

class TaskStatusController extends Controller
{
    public function index(){

        $task_statuses = TaskStatus::all();

        return $task_statuses;

    }

    public function show(TaskStatus $task_status){

        return $task_status;
        
    }
}
