<?php

use App\Http\Controllers\Api\TaskController;
use App\Http\Controllers\Api\TaskPriorityController;
use App\Http\Controllers\Api\TaskStatusController;
use App\Http\Controllers\Api\AuthController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

//Public
Route::post('login',[AuthController::class,'login']);
Route::post('logout',[AuthController::class,'logout']);
Route::post('register',[AuthController::class,'register']);

//Private
Route::middleware('jwt.auth')->group(function(){
    Route::apiResource('tasks',TaskController::class);

    Route::get('task_priorities',[TaskPriorityController::class,'index']);
    Route::get('task_priorities/{task_priority}',[TaskPriorityController::class,'show']);

    Route::get('task_statuses',[TaskStatusController::class,'index']);
    Route::get('task_statuses/{task_status}',[TaskStatusController::class,'show']);
});


