// "use client";

// import { useEffect, useState } from 'react';
import { getTasks } from './services/tasks.services';
import Cookies from "js-cookie";



    
async function Tasks() {

    console.log("token page: ",Cookies.get("authToken"))

    const tasks = await getTasks();

    return (
        <div>
            <pre>{JSON.stringify(tasks, null, 2)}</pre>
            {/* {error && <p>{error}</p>}
            {tasks ? (
                <pre>{JSON.stringify(tasks, null, 2)}</pre>
            ) : (
                <p>Cargando tareas...</p>
            )} */}
        </div>
    );
}

export default Tasks;