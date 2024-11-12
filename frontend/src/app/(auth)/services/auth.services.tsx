import { LoginRequest,LoginResponse,User } from "../interfaces/login.interfaces";
import { addUser,removeUser } from '../../store/userSlice';
import Cookies from "js-cookie";
import { useDispatch } from 'react-redux';


export const postLogin = async (loginData: LoginRequest,dispatch)  => {
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



export const logout = (dispatch) => { 
    Cookies.remove("authToken")
    Cookies.remove("id_u")
    dispatch(removeUser());
}
