// "use client";

// import { useEffect, useState } from 'react';
import { getTasks } from './services/tasks.services';
import Cookies from "js-cookie";
import { DynamicTable }  from '../../components';



    
async function Tasks() {


    const tasksObtained = await getTasks();

    const tasks = tasksObtained.data;

   

    return (
        <div>
            <DynamicTable dataTask = {tasks} ></DynamicTable>
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