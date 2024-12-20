

import Cookies from "js-cookie";

async function deleteTask (task_id: number){
    const url = `http://127.0.0.1:8000/api/tasks/${task_id}`;
    const token =  Cookies.get('authToken');

    try{

        const response =  await fetch(url,{
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
            body: JSON.stringify({
                path: '/tasks'
            })
        })

        if(response.status === 401 || response.status === 403){
            console.log("Token expirado")
            return { success: false, message: "Token expirado, por favor logueate de nuevo" }
        }

        return { success: true }

    }catch(error){
        console.error(`Error al eliminar el registro ${task_id}`)
        return { success: false }
    }

}

export default deleteTask;