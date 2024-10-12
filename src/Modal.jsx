import React from "react";
import "./Modal.css"; // Import CSS for styling the modal

const Modal = ({ show, onClose, children }) => {
    // If show is false, don't render the modal
    if (!show) {
        return null;
    }

    return (
        <div className="modal" onClick={onClose}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                <div className="modal-body">{children}</div>
            </div>
        </div>
    );
};

export default Modal;