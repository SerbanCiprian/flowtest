import React from 'react';
import './ReactButton.scss';

function ReactButton({ icon, children }) {
    return (
        <button className="single-post-button">
            <i className={`fas fa-${icon}`} /> {children}
        </button>
    );
}

export default ReactButton;
