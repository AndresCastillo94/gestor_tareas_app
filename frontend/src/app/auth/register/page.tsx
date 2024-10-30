"use client"

import Link from "next/link";

import{ useForm,SubmitHandler } from 'react-hook-form';
import { userShema } from "./validations/user.shema";
import { zodResolver } from "@hookform/resolvers/zod";
import { User } from "../interfaces/login.interfaces";
import { postRegister } from "../services";
import { useRouter } from 'next/navigation';
import { useDispatch } from "react-redux";


function Register(){

    const{ register,handleSubmit,reset,formState:{errors} } =  useForm({
        resolver: zodResolver(userShema)
    });

    const dispatch = useDispatch();
    const router = useRouter();

    const onSubmit: SubmitHandler<User> = async (credenciales) => {
        try {
            await postRegister(credenciales);
            router.push("/tasks"); 
        } catch (error) {
            console.error("Error al registrar:", error);
        }
    };

    return(
        <div className="auth-form">
            
            <form onSubmit={handleSubmit(onSubmit)}>
                <h1>Registro de usuario</h1>
                <label htmlFor="name">Nombre</label>
                <input type="text" id="name" 
                    {...register('name')}
                />
                {errors.name?.message && <span className="error-span">{errors.name?.message}</span>}
                
                <label htmlFor="email">Correo</label>
                <input type="text" id="email" 
                    {...register('email')}
                />
                {errors.email && <span className="error-span">{errors.email.message}</span>}
                
                
                <label htmlFor="name">Contraseña</label>
                <input type="password" id="password" 
                    {...register('password')}
                />
                {errors.password && <span className="error-span">{errors.password.message}</span>}
                
                
                <label htmlFor="confirmPassword">Confirma contraseña</label>
                <input type="password" id="confirmPassword"  
                    {...register('confirmPassword')}
                />
                {errors.confirmPassword && <span className="error-span">{errors.confirmPassword.message}</span>}

                <button>Registrar</button>
                <Link href="/auth/login" >Login</Link>
                
            </form>

         
            
        </div>
    );
}

export default Register;