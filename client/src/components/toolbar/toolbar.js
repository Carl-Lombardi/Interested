import React from 'react';
import SideToggleButton from '../sideToggle/sideToggleButton.js';

const Toolbar = props => (
    <header className="toolbar">
         <nav className="toolbar_navigation">
            <div className="toolbar_toggle-button">
                <SideToggleButton click={props.sideClickHandler} />
            </div>
            <div className="toolbar_icon"><a href="/">LOGO GOES HERE</a></div>
            <div className="spacer"></div>
            <div className="toolbar_navigation-items">
                <ul>
                    <li><a href="/">Home</a></li>
                    <li><a href="/">Profile</a></li>
                    <li><a href="/">Results</a></li>
                    <li><a href="/">Log Out</a></li>
                 </ul>
            </div>
        </nav>
    </header>
);

export default Toolbar;