import React from 'react';
import PageMenu from './PageMenu.jsx';
import './LeftSidebar.scss';
import Image1 from './images/avatar.png';

function LeftSidebar() {
    return (
        <div className="left-sidebar">
            <div className="left-sidebar__identity">
                <img className="left-sidebar__avatar" src={Image1} alt="" />
                <div>
                    <h2 className="left-sidebar__title">
                        Flowmatters <i className="fas fa-check-circle" />
                    </h2>
                    <h4 className="left-sidebar__subtitle">@EveryInteraction</h4>
                </div>
            </div>
            <div className="left-sidebar__menu-wrap">
                <div className="left-sidebar__menu">
                    <PageMenu />
                </div>
                <div className="left-sidebar__new">
                    <button className="button button--secondary">Create a Page</button>
                </div>
            </div>
        </div>
    );
}

export default LeftSidebar;
