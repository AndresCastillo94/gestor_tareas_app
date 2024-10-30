<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Requests\UserRequest;
use App\Http\Resources\UserResource;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;
use App\Models\User;
use Illuminate\Support\Facades\Hash;
use Tymon\JWTAuth\Facades\JWTAuth;

class AuthController extends Controller
{

    public function login(Request $request){

        $credencials = $request->only('email','password');

        if(!$token = JWTAuth::attempt($credencials)){
            return response()->json([
                'message' => 'Las credenciales son incorrectas'
            ],Response::HTTP_UNPROCESSABLE_ENTITY); //422
        }

        $user = JWTAuth::user();

        return response()->json(new UserResource($user,$token),Response::HTTP_OK);;

    }

    // public function logout(){

    //     JWTAuth::invalidate(JWTAuth::getToken());

    //     return response()->json(['message' => 'El usuario se ha deslogueado satisfactoriamente'], Response::HTTP_OK);

    // }

    public function register(UserRequest $request){

        $user = User::create($request->all());

        $token = JWTAuth::fromUser($user);

        return response()->json(new UserResource($user,$token),Response::HTTP_CREATED);

    }

}
