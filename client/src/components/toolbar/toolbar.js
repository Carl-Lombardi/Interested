import React from 'react';
import { Link } from "react-router-dom";
import SideToggleButton from '../sideToggle/sideToggleButton.js';
import './toolbar.css';
import LogoutBtn from '../logoutBtn/logoutBtn';

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
                        <Link to="/" className={window.location.pathname === "/Home" ? "nav-link active" : "nav-link"}>
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link to="/profile" className={window.location.pathname === "/profile" ? "nav-link active" : "nav-link"}>
                            Profile
                        </Link>
                    </li>
                    <li>
                        <Link to="/results" className={window.location.pathname === "/results" ? "nav-link active" : "nav-link"}>
                            Results
                        </Link>
                    </li>
                    <li>
                    <Link to="/users" className={window.location.pathname === "/users" ? "nav-link active" : "nav-link"}>
                            Users
                        </Link>
                        </li>
                    <li>
                        <LogoutBtn/>
                    </li>
                </ul>
            </div>
        </nav>
    </header>
);

export default Toolbar;