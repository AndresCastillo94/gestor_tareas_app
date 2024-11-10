"use client"

import { useState } from 'react';
import Modal from '../Modal/Modal';
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
                <Modal onClose={handleCloseModal}/>
            )}
        </>
    )
}
export default CreateTaskButton;