import Cookies from "js-cookie";
import { Task } from "./interfaces/task.interface";

export const postTask =  (task: Task) => {
    const url = "http://127.0.0.1:8000/api/tasks";

    const token =  Cookies.get('authToken');

    return fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify(task),
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
        return data;
    })
    .catch((error) => {
        console.error('Error en el fetch:', error);
        throw error;
    });
};