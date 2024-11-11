"use client"

import { useState } from "react";
import CreateTaskButton from "../CreateTaskButton/CreateTaskButton";
import DynamicTable from "../DynamicTable/DynamicTable";
import Modal from "../Modal/Modal";

function TaskUi({tasks}){

    const [openModal,setOpenModal] = useState(false);
    const [selectedTask, setSelectedTask] = useState(null);

    const modalOn = (task) => {
        setSelectedTask(task);
        setOpenModal(true);
    } 
    

    const handleCloseModal = () => {
        setOpenModal(false); 
    };

    

    return(
        <div className="task-container">
            <h1>Gestor de Tareas</h1>
            
            <CreateTaskButton/>
            <DynamicTable dataTask = {tasks} modalOn = {modalOn} />

            {openModal && (
                <Modal onClose = {handleCloseModal} selectedTask = {selectedTask} />
            )}
                
            
        </div>
    );
}

export default TaskUi;