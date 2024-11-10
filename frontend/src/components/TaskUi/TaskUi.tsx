"use client"

import { useState } from "react";
import CreateTaskButton from "../CreateTaskButton/CreateTaskButton";
import DynamicTable from "../DynamicTable/DynamicTable";
import Modal from "../Modal/Modal";

function TaskUi({tasks}){

    const [openModal,setOpenModal] = useState(false);

    const handleClick = () => {
        setOpenModal(true); 
    };

    const handleCloseModal = () => {
        setOpenModal(false); 
    };
    return(
        <div className="task-container">
            <h1>Gestor de Tareas</h1>
            
            <CreateTaskButton/>
            <DynamicTable dataTask = {tasks} />

            {openModal && (
                <Modal onClose={handleCloseModal}/>
            )}
                
            
        </div>
    );
}

export default TaskUi;