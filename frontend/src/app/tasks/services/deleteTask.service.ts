

import Cookies from "js-cookie";
import { revalidatePath } from "next/cache";
import { NextResponse } from "next/server";

async function deleteTask (task_id: number){
    const url = `http://127.0.0.1:8000/api/tasks/${task_id}`;
    const token =  Cookies.get('authToken');

    try{

        await fetch(url,{
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
            body: JSON.stringify({
                path: '/tasks'
            })
        })

        return { success: true }

    }catch(error){
        console.error(`Error al eliminar el registro ${task_id}`)
        return { success: false }
    }

}

export default deleteTask;