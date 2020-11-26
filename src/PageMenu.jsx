import React from 'react';
import './PageMenu.scss';

const pages = [
    {
        id: 0,
        name: 'Home',
        link: '#',
        selected: true,
    },
    {
        id: 1,
        name: 'About',
        link: '#',
    },
    {
        id: 2,
        name: 'Notes',
        link: '#',
    },
    {
        id: 3,
        name: 'Email Signup',
        link: '#',
    },
    {
        id: 4,
        name: 'Photos',
        link: '#',
    },
    {
        id: 5,
        name: 'Reviews',
        link: '#',
    },
    {
        id: 6,
        name: 'Videos',
        link: '#',
    },
    {
        id: 7,
        name: 'Likes',
        link: '#',
    },
    {
        id: 8,
        name: 'Posts',
        link: '#',
    },
];

function PageMenu() {
    return (
        <ul className="page-menu">
            {pages.map((page) => {
                const selectedClass = page.selected ? 'page-menu__link--selected' : '';

                return (
                    <li key={page.id} className="page-menu__item">
                        <a className={`page-menu__link ${selectedClass}`} href={page.link}>
                            {page.name}
                        </a>
                    </li>
                );
            })}
        </ul>
    );
}

export default PageMenu;
