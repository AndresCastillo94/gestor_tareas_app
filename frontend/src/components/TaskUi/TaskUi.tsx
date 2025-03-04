"use client"

import { useState } from "react";
import DynamicTable from "../DynamicTable/DynamicTable";
import Modal from "../Modal/Modal";

function TaskUi({tasks}){

    const [openModal,setOpenModal] = useState(false); 
    const [selectedTask, setSelectedTask] = useState(null); 
    const [dataTask,setDataTask] = useState(tasks);

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
            
            <button className="button" onClick={() => modalOn()}>Crear tarea</button>
            <DynamicTable dataTask = {dataTask} setDataTask = {setDataTask} modalOn = {modalOn} />

            {openModal && (
                <Modal onClose = {handleCloseModal} dataTask = {dataTask} setDataTask = {setDataTask} selectedTask = {selectedTask} />
            )}
                
            
        </div>
    );
}

export default TaskUi;