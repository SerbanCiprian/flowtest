import React from 'react';
import './SidebarBox.scss';

function SidebarBox({ title, children }) {
    return (
        <div className="sidebar-box">
            <div className="sidebar-box__title">{title}</div>
            <div>{children}</div>
        </div>
    );
}

export default SidebarBox;
