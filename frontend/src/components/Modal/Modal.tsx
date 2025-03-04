"use client"

import ReactDOM from "react-dom";
import './Modal.css';
import TaskForm from "../TaskForm/TaskForm";

interface ModalProps {
    onClose: () => void;
    dataTask: Task[];
    setDataTask: React.Dispatch<React.SetStateAction<Task[]>>;
    selectedTask?: Task;  
}

function Modal({ onClose,dataTask,setDataTask,selectedTask }:ModalProps) {

    return ReactDOM.createPortal(
        <div id="modal-overlay" onClick={onClose}>
            <div id="modal-container" onClick={e => e.stopPropagation()}>
                <div><button className="close-button" onClick={onClose}>X</button></div>
                <h1>{selectedTask?`Actualizando tarea: ${selectedTask.title}`:"Nueva tarea"}</h1>
                <TaskForm onClose={onClose} dataTask = {dataTask} setDataTask = {setDataTask} toUpdateTask = {selectedTask}/>
            </div>
        </div>,
        document.getElementById('modal') as HTMLElement
    );
}

export default Modal;
