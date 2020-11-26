/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import './About.scss';
import map from './images/map.png';

function About() {
    return (
        <div className="about">
            <div className="map">
                <img src={map} alt="" />
            </div>
            <ul className="info-list">
                <li>
                    <i className="fas fa-directions" />
                    <a href="#">Campul Painii 4-5 400058 Cluj-Napoca</a>
                </li>
                <li>
                    <i className="fas fa-phone" /> 0740 070 011
                </li>
                <li>
                    <a href="#">
                        <i className="fas fa-question-circle" /> Ask for Every Interaction’s hours{' '}
                    </a>
                </li>
                <li>
                    <a href="https://www.flowmatters.com/">
                        <i className="fas fa-globe" /> https://www.flowmatters.com/
                    </a>
                </li>
            </ul>
        </div>
    );
}

export default About;
