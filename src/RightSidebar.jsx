/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';

import './RightSidebar.scss';

import photo00 from './images/photo00.jpg';
import photo01 from './images/photo01.jpg';
import photo02 from './images/photo02.jpg';
import photo03 from './images/photo03.jpg';
import photo04 from './images/photo04.jpg';
import photo05 from './images/photo05.jpg';
import photo06 from './images/photo06.jpg';
import photo07 from './images/photo07.jpg';
import photo08 from './images/photo08.jpg';

import About from './About.jsx';
import SidebarBox from './SidebarBox.jsx';
import PhotoGrid from './PhotoGrid.jsx';

const photos = [
    {
        id: 0,
        name: 'Photo 1',
        source: photo00,
    },
    {
        id: 1,
        name: 'Photo 2',
        source: photo01,
    },
    {
        id: 2,
        name: 'Photo 3',
        source: photo02,
    },
    {
        id: 3,
        name: 'Photo 4',
        source: photo03,
    },
    {
        id: 4,
        name: 'Photo 5',
        source: photo04,
    },
    {
        id: 5,
        name: 'Photo 6',
        source: photo05,
    },
    {
        id: 6,
        name: 'Photo 7',
        source: photo06,
    },
    {
        id: 7,
        name: 'Photo 8',
        source: photo07,
    },
    {
        id: 8,
        name: 'Photo 9',
        source: photo08,
    },
];

function RightSidebar() {
    return (
        <div className="right-sidebar">
            <SidebarBox title="About">
                <About />
            </SidebarBox>
            <SidebarBox title="Photos">
                <PhotoGrid photos={photos} />
            </SidebarBox>
        </div>
    );
}

export default RightSidebar;
