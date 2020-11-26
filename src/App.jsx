import React, { useState, useEffect } from 'react';

import './App.scss';

import Menu from './Menu.jsx';
import LeftSidebar from './LeftSidebar.jsx';
import Header from './Header.jsx';
import Posts from './Posts.jsx';
import RightSidebar from './RightSidebar.jsx';

function App() {
    const [sticky, setSticky] = useState(false);
    const stickyClass = sticky ? 'sticky' : '';

    const handleScroll = () => {
        if (window.scrollY > 200) {
            setSticky(true);
        } else {
            setSticky(false);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
    }, []);

    return (
        <div className={stickyClass}>
            <Menu />
            <div className="page column-view container">
                <div className="page--left">
                    <LeftSidebar />
                </div>
                <div className="page--right">
                    <Header />
                    <div className="column-view content">
                        <div className="content--main">
                            <Posts />
                        </div>
                        <div className="content--side">
                            <RightSidebar />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;
