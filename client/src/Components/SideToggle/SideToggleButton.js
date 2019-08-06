import React from './node_modules/react';
import './SideToggleButton.css';

const SideToggleButton = props => (
    <button className="toggle-button" onClick={props.click}>
        <div className="toggle-button_line" />
        <div className="toggle-button_line" />
        <div className="toggle-button_line" />
    </button>
);

export default SideToggleButton;