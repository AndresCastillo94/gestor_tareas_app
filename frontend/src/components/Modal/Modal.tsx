import ReactDOM from "react-dom";
import './Modal.css';
import TaskForm from "../TaskForm/TaskForm";
import { useEffect } from "react";

function Modal({ onClose,selectedTask }) {

    return ReactDOM.createPortal(
        <div id="modal-overlay" onClick={onClose}>
            <div id="modal-container" onClick={e => e.stopPropagation()}>
                <h1>Nueva Tarea</h1>
                    <TaskForm onClose={onClose} toUpdateTask = {selectedTask}/>
                <button onClick={onClose}>Cerrar</button>
            </div>
        </div>,
        document.getElementById('modal') as HTMLElement
    );
}

export default Modal;
