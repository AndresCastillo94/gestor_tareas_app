"use client"

import { Span } from "next/dist/trace";
import Link from "next/link";

import{ useForm } from 'react-hook-form';

function Register(){

    const{ register,handleSubmit,formState:{errors},reset } =  useForm();

    const onSubmit = handleSubmit((data)=>{console.log(data); reset;})

    return(
        <div className="auth-form">
            
            <form onSubmit={onSubmit}>
                <h1>Registro de usuario</h1>
                <label htmlFor="name">Nombre</label>
                <input type="text" id="name" 
                    {...register('name',{
                        required: {
                            value:true,
                            message: "Por favor ingresa tu nombre"
                        }
                    })}
                />
                {errors.name && <span className="error-span">{errors.name.message}</span>}
                
                <label htmlFor="email">Correo</label>
                <input type="text" id="email" 
                    {...register('email',{
                        required: {
                            value: true,
                            message: "Por favor ingresa tu correo"
                        },
                        pattern: {
                            value: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
                            message: "Correo no válido", 
                        }
                    })}
                />
                {errors.email && <span className="error-span">{errors.email.message}</span>}
                
                
                <label htmlFor="name">Contraseña</label>
                <input type="password" id="password" 
                    {...register('password',{
                        required: {
                            value: true,
                            message: "Contraseña es requerida",
                          },
                          minLength: {
                            value: 6,
                            message: "Contraseña debe ser mayor a 6 caracteres",
                          },
                    })}
                />
                {errors.password && <span className="error-span">{errors.password.message}</span>}
                
                
                <label htmlFor="confirmPassword">Confirma contraseña</label>
                <input type="password" id="confirmPassword"  
                    {...register('confirmPassword',{
                        required: {
                            value: true,
                            message: "Por favor ingresa nuevamente tu contraseña"
                        },
                        validate:(value)=> value === password.current || "Las contraseñas no coinciden"
                        
                    })}
                />
                {errors.password && <span className="error-span">{errors.confirmPassword.message}</span>}

                <button>Registrar</button>
                <Link href="/auth/login" >Login</Link>
                
            </form>
            
        </div>
    );
}

export default Register;