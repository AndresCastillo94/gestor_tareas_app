import { LoginRequest,LoginResponse,User } from "../interfaces/login.interfaces";
import { addUser } from '../../store/userSlice';
import Cookies from "js-cookie";


export const postLogin = async (loginData: LoginRequest,dispatch): Promise<LoginResponse> => {
    const url = "http://127.0.0.1:8000/api/login";
    try {
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(loginData),
        });

        if (!response.ok) {
            const errorData = await response.json(); 
            throw new Error(errorData.message || 'Error de autenticación');
        }

        const data = await response.json();

        dispatch(addUser(data));
        Cookies.set("authToken", data.token, { secure: true, sameSite: 'strict' });
        Cookies.set("id_u", data.id, { secure: true, sameSite: 'strict' });
        return data;
    } catch (error) {
        console.error('Error en el fetch:', error);
        throw error;
    }
};

export const postRegister = (loginData: User,dispatch): Promise<LoginResponse> => {
    const url = "http://127.0.0.1:8000/api/register";

    return fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(loginData),
    })
    .then((response) => {
        if (!response.ok) {
            return response.json().then((errorData) => {
                throw new Error(errorData.message || 'Error de autenticación');
            });
        }
        return response.json();
    })
    .then((data) => {
        dispatch(addUser(data));
        Cookies.set("authToken", data.token, { secure: true, sameSite: 'strict' });
        return data as LoginResponse;
    })
    .catch((error) => {
        console.error('Error en el fetch:', error);
        throw error;
    });
};

export const logout = () => { 
    Cookies.remove("authToken")
}
