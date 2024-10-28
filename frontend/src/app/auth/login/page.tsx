"use client";

import { postLogin } from '../services';
import { useDispatch } from 'react-redux';
import { setToken } from '../../store/auth.slice'; 
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';



function Login(){
    const dispatch = useDispatch();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const router = useRouter();

    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault();
        
        try {
            const loginData = { email, password };
            const data = await postLogin(loginData); 
            if (data&&data.token) {
                dispatch(setToken(data.token)); 
                router.push('/');
            } else {
                setError('El token no fue recibido');
            }
        } catch (err) {
            console.error('Login failed:', err);
            setError('Credenciales erroneas');
        }
    };


    return(
        <div className="auth-form">
            <h1>Login</h1>
            <form onSubmit = {handleLogin}>
                
                    <label htmlFor="">E-mail</label>
                    <input 
                        type="email" 
                        value={email} 
                        onChange={(e) => setEmail(e.target.value)} 
                        placeholder="Email" 
                        required 
                    />
               
              
                    <label htmlFor="">Contraseña</label>
                    <input 
                        type="password" 
                        value={password} 
                        onChange={(e) => setPassword(e.target.value)} 
                        placeholder="Password" 
                        required 
                    />
               
                <button type="submit" >Ingresar</button>
                <Link href="/auth/register" >¿Aún no estás registrado/a?</Link>
            </form> 
        </div>
    )
}

export default Login;