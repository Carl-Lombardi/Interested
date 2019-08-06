import React from './node_modules/react';
import './SideToggle.css';

const SideToggle = props => {
    let toggleClasses = "Side-Toggle";
    if (props.show) {
        toggleClasses = ["Side-Toggle open"];  
    }

   return (<nav className={toggleClasses}>
        <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/">Profile</a></li>
            <li><a href="/">Results</a></li>
            <li><a href="/">Log Out</a></li>
        </ul>
    </nav>
    );
};

export default SideToggle;