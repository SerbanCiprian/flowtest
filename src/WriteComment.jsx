/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import './WriteComment.scss';
import avatarComment from './images/avatar-comment.png';

function WriteComment() {
    return (
        <div className="write-comment">
            <div className="write-comment__avatar">
                <img src={avatarComment} alt="" />
            </div>
            <div className="write-comment__input">
                <input type="text" placeholder="Write a comment..." />
                <a href="#" className="write-comment__button">
                    <i className="fas fa-camera" />
                </a>
                <a href="#" className="write-comment__button">
                    <i className="far fa-smile" />
                </a>
            </div>
        </div>
    );
}

export default WriteComment;
