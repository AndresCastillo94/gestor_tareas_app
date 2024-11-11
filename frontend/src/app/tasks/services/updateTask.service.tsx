import { Task } from "./interfaces/task.interface";
import Cookies from "js-cookie";

async function putTask(task: Task){
    const url = `http://127.0.0.1:8000/api/tasks/${task.id}`;
    const token =  Cookies.get('authToken');

    try{
        const response = await fetch(url,{ 
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'Authorization':`Bearer  ${token}`
            },
            body: JSON.stringify(task)
        });

        const data = await response.json();
        
        return { success: true, data: data}

    }catch(error){
        console.error(`Error al actualizar el registro ${task.id}`)
    }
}

export default putTask;