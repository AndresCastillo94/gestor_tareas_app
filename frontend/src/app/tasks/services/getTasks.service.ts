
// import Cookies from "js-cookie";
//import { cookies } from "next/headers";
//import { useRouter } from 'next/navigation';


export const getTasks = async (userId: string, token: string) => {
    // const cookieStore = cookies();
    // const userId = cookieStore.get('id_u')?.value;

    const url = `http://127.0.0.1:8000/api/tasks?user_id=${userId}`;


    try{
        
        const response = await fetch(url,{
            method: 'GET',
            headers: {
                'Content-type': 'application/json',
                'Authorization': `Bearer ${token}`
            }
        })

        if(response.status === 401 || response.status === 403){
            return { success: false, message: "Token expirado, redirigiendo a login para revalidar credenciales" }
        }else{
            const data = await response.json();

            if(!response.ok){
                const errorData = await response.json();
                throw new Error(errorData.message);
            }else{
                return { success:true, data: data.data }
            }
        }


    }catch(error){

        console.error('Hubo un error trayando la información de las tareas',error);
        throw error;

    }

}
