import React from 'react';
import { Link } from "react-router-dom";
import SideToggleButton from '../sideToggle/sideToggleButton.js';

const Toolbar = props => (
    <header className="toolbar">
        <nav className="toolbar_navigation">
            <div className="toolbar_toggle-button">
                <SideToggleButton click={props.sideClickHandler} />
            </div>
            <div className="toolbar_icon"><a href="/">INTERESTED</a></div>
            <div className="spacer"></div>
            <div className="toolbar_navigation-items">
                <ul>
                    <li>
                        <Link to="/" className={window.location.pathname === "/" ? "nav-link active" : "nav-link"}>
                            Home
                        </Link>
                    </li>
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
                    <li>
                        <Link to="/logout" className={window.location.pathname === "/logout" ? "nav-link active" : "nav-link"}>
                            logout
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    </header>
);

export default Toolbar;