import { LoginRequest,LoginResponse,User } from "../interfaces/login.interfaces";

export const postLogin = async (loginData: LoginRequest): Promise<LoginResponse> => {
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
        return data;
    } catch (error) {
        console.error('Error en el fetch:', error);
        throw error;
    }
};

export const postRegister = async (loginData: User): Promise<LoginResponse> => {
    const url = "http://127.0.0.1:8000/api/register";
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
        return data;
    } catch (error) {
        console.error('Error en el fetch:', error);
        throw error;
    }
}