/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import './Menu.scss';

function Menu() {
    return (
        <div className="menu">
            <div className="container column-view">
                <div className="menu__left">
                    <i className="fab fa-facebook-square fb-logo" />
                    <div className="menu__search">
                        <input type="text" placeholder="Search here..." />
                        <button>
                            <i className="fas fa-search" />
                        </button>
                    </div>
                </div>
                <div className="menu__right">
                    <a href="#" className="home-button">
                        Home <span>5</span>
                    </a>
                    <div className="notifications">
                        <a href="#">
                            <i className="fas fa-user-friends" />
                        </a>
                        <a href="#">
                            <i className="fas fa-comments" />
                        </a>
                        <a href="#">
                            <i className="fas fa-globe-americas" />
                        </a>
                    </div>
                    <a href="#">
                        <i className="fas fa-lock" />
                    </a>
                    <a href="#">
                        <i className="fas fa-sort-down" />
                    </a>
                </div>
            </div>
        </div>
    );
}

export default Menu;
