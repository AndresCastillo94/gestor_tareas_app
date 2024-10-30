
// import Cookies from "js-cookie";
import { cookies } from "next/headers";
import { useRouter } from 'next/navigation';

export const getTasks = async () => {
    const url = "http://127.0.0.1:8000/api/tasks/";



    try{
        
        const cookieStore = cookies();
        const token = cookieStore.get('authToken')?.value;

        
        const response = await fetch(url,{
            method: 'GET',
            headers: {
                'Content-type': 'application/json',
                'Authorization': `Bearer ${token}`
            }
        })

        if(!response.ok){
            const errorData = await response.json();
            throw new Error(errorData.message);
        }else{
            return await response.json()
        }
        

    }catch(error){

        console.error('Hubo un error trayando la información de las tareas',error);
        throw error;

    }

}