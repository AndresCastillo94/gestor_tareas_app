"use client"

import { useState } from 'react';
import Modal from '../Modal/Modal';
import TaskForm from '../TaskForm/TaskForm';
import './CreateTaskButton.css'

function CreateTaskButton(){

    const [openModal,setOpenModal] = useState(false);

    const handleClick = () => {
        setOpenModal(true); 
    };

    const handleCloseModal = () => {
        setOpenModal(false); 
    };
    

    return( 
        <>
            <button onClick={handleClick}>Crear tarea</button>
            {openModal && (
                <Modal onClose={handleCloseModal}>
                    <TaskForm onClose={handleCloseModal}/>
                </Modal>
            )}
        </>
    )
}
export default CreateTaskButton;