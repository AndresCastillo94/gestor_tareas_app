<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Task;
use Illuminate\Http\Request;
use App\Http\Resources\TaskResource;
use Symfony\Component\HttpFoundation\Response;

class TaskController extends Controller
{
    public function index(){

        $tasks = TaskResource::collection(Task::with('task_status','task_priority','user')->get());

        return $tasks;

    }

    public function store(Request $request){

        $task = Task::create($request->all());

        return response()->json(new TaskResource($task),Response::HTTP_CREATED);

    }

    public function show(Task $task){

        return new TaskResource($task);

    }

    public function update(Request $request,Task $task){

        $task->update($request->all());

        return response()->json(new TaskResource($task),Response::HTTP_OK);

    }

    public function destroy(Task $task){

        $task->delete();

        return response()->json(null,Response::HTTP_NO_CONTENT);

    }

}
