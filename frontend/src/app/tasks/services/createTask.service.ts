import Cookies from "js-cookie";
import { Task } from "./interfaces/task.interface";

async function postTask(task: Task){
    const url = "http://127.0.0.1:8000/api/tasks";
    const token =  Cookies.get('authToken');

    try{

        const response = await fetch(url,{
            method:'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization':`Bearer  ${token}`
            },
            body: JSON.stringify(task)
        })


        if(response.status === 401 || response.status === 403){
            console.log("Token expirado")
            return { success: false, message: "Token expirado, por favor logueate de nuevo" }
        }

        const data = await response.json();
        
        return { success: true, data: data}

    }catch(error){
         console.error("Error al crear la nueva tarea")
    }
};

export default postTask;