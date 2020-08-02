import React from 'react';
import classes from './Button.module.css'

const button = (props) => (
    <button 
        // class should be a string, so we build an array and convert to a string 
        className={[classes.Button, classes[props.btnType]].join(' ')}
        onClick={props.clicked}
    >
        {props.children}
    </button>
);

export default button;