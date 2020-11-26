/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import './Compose.scss';
import avatarCompose from './images/avatar-compose.png';

function Compose() {
    return (
        <div className="compose">
            <div className="compose__icons">
                <a href="#">
                    <i className="fas fa-pen status-icon" />
                    <span>Status</span>
                </a>
                <a href="#">
                    <i className="fas fa-photo-video photo-icon" />
                    <span>Photo/Video</span>
                </a>
            </div>
            <div className="compose__write">
                <div className="avatar">
                    <img src={avatarCompose} alt="" />
                    <input type="text" placeholder="Write something this Page..." />
                </div>
            </div>
        </div>
    );
}

export default Compose;
