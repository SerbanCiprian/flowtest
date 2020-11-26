import React from 'react';
import './Header.scss';
import ActionButton from './ActionButton.jsx';
import banner from './images/banner.png';

function Header() {
    return (
        <div className="header">
            <img className="header__cover" src={banner} alt="" />
            <div className="header__actions">
                <div className="header__actions--left">
                    <ActionButton icon="thumbs-up" first highlight>
                        Like
                    </ActionButton>
                    <ActionButton icon="comment">Message</ActionButton>
                    <ActionButton icon="ellipsis-h" last>
                        More
                    </ActionButton>
                </div>
                <div className="header__actions--right">
                    <button className="button button--primary">Contact Us</button>
                </div>
            </div>
        </div>
    );
}

export default Header;
