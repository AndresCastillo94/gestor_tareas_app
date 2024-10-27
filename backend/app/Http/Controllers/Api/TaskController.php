<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Task;
use Illuminate\Http\Request;
use App\Http\Resources\TaskResource;

class TaskController extends Controller
{
    public function index(){

        $tasks = TaskResource::collection(Task::with('task_status','task_priority','user')->get());

        return $tasks;

    }

    public function store(Request $request){



    }

    public function show(Task $task){

        return new TaskResource($task);

    }

    public function update(Request $request){

    }

    public function destroy(Task $task){

    }

}
