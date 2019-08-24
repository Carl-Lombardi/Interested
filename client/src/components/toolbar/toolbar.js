import React from 'react';
import { Link } from "react-router-dom";
import SideToggleButton from '../sideToggle/sideToggleButton.js';
import "./toolbar.css";

const Toolbar = props => (
    <header className="toolbar">
        <nav className="toolbar_navigation">
            <div className="toolbar_toggle-button">
                <SideToggleButton click={props.sideClickHandler} />
            </div>
            <h1 className="toolbar_icon">INTERESTED</h1>
            <div className="spacer"></div>
            <div className="toolbar_navigation-items">
                <ul>
                    <li>
                        <Link to="/profile" className={window.location.pathname === "/profile" ? "nav-link active" : "nav-link"}>
                            Profile
                        </Link>
                    </li>
                    <li>
                        <Link to="/resuts" className={window.location.pathname === "/results" ? "nav-link active" : "nav-link"}>
                            Results
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    </header>
);

export default Toolbar;