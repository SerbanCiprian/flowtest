import React from 'react';
import './Modal.scss';

function Modal({ image, handleOnClose }) {
    if (!image) return null;

    return (
        <div className="modal" onClick={handleOnClose}>
            <div className="modal__overlay">
                <img className="modal__content" src={image} alt="" />
            </div>
        </div>
    );
}

export default Modal;
