import React from 'react';
import './ActionButton.scss';

function ActionButton({ icon, children, first, last, highlight }) {
    const firstClass = first ? 'action-button--first' : '';
    const lastClass = last ? 'action-button--last' : '';
    const highlightClass = highlight ? 'action-button--highlight' : '';

    return (
        <button className={`action-button ${firstClass} ${lastClass} ${highlightClass}`}>
            <i className={`fas fa-${icon}`} /> {children}
        </button>
    );
}

export default ActionButton;
