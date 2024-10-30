"use client";

import { postLogin } from '../services';
import{ useForm,SubmitHandler } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { loginUserShema } from "./validations/loginUser.shema";
import { zodResolver } from "@hookform/resolvers/zod";
import { LoginRequest } from "../interfaces/login.interfaces";



function Login(){
    
    const{ register,handleSubmit,reset,formState:{errors} } =  useForm({
        resolver: zodResolver(loginUserShema)
    });

    const dispatch = useDispatch();
    const router = useRouter();

    const onSubmit: SubmitHandler<LoginRequest> = async (credenciales) => {
        try {
            const data = await postLogin(credenciales,dispatch);
            router.push(`/tasks`);
        } catch (error) {
            console.error("Error al registrar:", error);
        }
    };

    return(
        <div className="auth-form">
            <h1>Login</h1>
            <form onSubmit = {handleSubmit(onSubmit)}>
                
                    <label htmlFor="">E-mail</label>
                    <input type="text" id="email" 
                    {...register('email')}
                    />
                    {errors.email && <span className="error-span">{errors.email.message}</span>}
               
              
                    <label htmlFor="">Contraseña</label>
                    <input type="password" id="password" 
                    {...register('password')}
                />
                {errors.password && <span className="error-span">{errors.password.message}</span>}
               
                <button type="submit" >Ingresar</button>
                <Link href="/auth/register" >¿Aún no estás registrado/a?</Link>
            </form> 
        </div>
    )
}

export default Login;