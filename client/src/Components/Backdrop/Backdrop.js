import React from './node_modules/reacte_modules/react';
import './Backdrop.css';

const Backdrop = props => (
<div className="backdrop" onClick={props.click}></div>
);

export default Backdrop;