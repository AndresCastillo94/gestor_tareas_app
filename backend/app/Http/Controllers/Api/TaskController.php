<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Requests\TaskRequest;
use App\Models\Task;
use Illuminate\Http\Request;
use App\Http\Resources\TaskResource;
use App\Mail\TaskMail;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Mail;
use Symfony\Component\HttpFoundation\Response;

class TaskController extends Controller
{
    public function index(Request $request){

        $user_id = $request->query('user_id');

        $tasks_query= Task::with('task_status','task_priority','user');

        if($user_id){
            $tasks_query->where('user_id', $user_id);
        }

        $tasks = $tasks_query->orderBy('id', 'desc')->get();
        

        return TaskResource::collection($tasks);

    }

    public function store(TaskRequest $request){

        $task = Task::create($request->all());

        if($task->task_priority_id == 1 && $task->task_status_id != 3){
            try {
                Mail::to($task->user->email)->send(new TaskMail($task));
            } catch (\Exception $e) {
                Log::error('Error al enviar el correo: ' . $e->getMessage());
            }
        }

        return response()->json(new TaskResource($task),Response::HTTP_CREATED);

    }

    public function show(Task $task){

        return new TaskResource($task);

    }

    public function update(TaskRequest $request,Task $task){

        $task->update($request->all());

        if($task->task_priority_id == 1 && $task->task_status_id != 3){
            try {
                Mail::to($task->user->email)->send(new TaskMail($task));
            } catch (\Exception $e) {
                Log::error('Error al enviar el correo: ' . $e->getMessage());
            }
        }

        return response()->json(new TaskResource($task),Response::HTTP_OK);

    }

    public function destroy(Task $task){

        $task->delete();

        return response()->json(null,Response::HTTP_NO_CONTENT);

    }

}
