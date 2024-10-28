"use client"

import Link from "next/link";

import{ useForm } from 'react-hook-form';

function Register(){

    const{ register,handleSubmit } =  useForm();

    return(
        <div className="auth-form">

            <form onSubmit={handleSubmit((data)=>console.log(data))}>
                <h1>Registro de usuario</h1>
                <label htmlFor="name">Nombre</label>
                <input type="text" id="name" 
                    {...register('name')}
                />
                
                <label htmlFor="email">Correo</label>
                <input type="text" id="email" 
                    {...register('email')}
                />
                
                <label htmlFor="name">Contraseña</label>
                <input type="password" id="password" 
                    {...register('password')}
                />
                
                <label htmlFor="confirmPassword">Confirma contraseña</label>
                <input type="password" id="confirmPassword" />

                <button>Registrar</button>
                <Link href="/auth/login" >Login</Link>
                
            </form>
            
        </div>
    );
}

export default Register;