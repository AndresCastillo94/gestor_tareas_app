import ReactDOM from "react-dom";
import './Modal.css';

function Modal({ onClose, children }) {
    return ReactDOM.createPortal(
        <div id="modal-overlay" onClick={onClose}>
            <div id="modal-container" onClick={e => e.stopPropagation()}>
                <h1>Login</h1>
                {children}
                <button onClick={onClose}>Cerrar</button>
            </div>
        </div>,
        document.getElementById('modal') as HTMLElement
    );
}

export default Modal;
