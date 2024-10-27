<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Requests\UserRequest;
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

        return response()->json(compact('token'),Response::HTTP_OK);;

    }

    public function logout(){

        JWTAuth::invalidate(JWTAuth::getToken());

        return response()->json(['message' => 'El usuario se ha deslogueado satisfactoriamente'], Response::HTTP_OK);

    }

    public function register(UserRequest $request){

        $user = User::create($request->all());

        return response()->json($user,Response::HTTP_CREATED);

    }

}
