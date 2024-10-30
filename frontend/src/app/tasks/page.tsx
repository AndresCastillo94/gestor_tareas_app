//"use client";

// import { useEffect, useState } from 'react';
import { getTasks } from './services/tasks.services';
import Cookies from "js-cookie";
import { DynamicTable }  from '../../components';
import { CreateTaskButton } from 'app/components';



    
async function Tasks() {


    const tasksObtained = await getTasks();

    const tasks = tasksObtained.data;
    
   

    return (
        <div className="task-container">
            <h1>Gestor de Tareas</h1>
            
            <CreateTaskButton/>
            <DynamicTable dataTask = {tasks} >
                
            </DynamicTable>
            <pre>{}</pre>
            {/* <pre>{JSON.stringify(tasks, null, 2)}</pre> */}
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