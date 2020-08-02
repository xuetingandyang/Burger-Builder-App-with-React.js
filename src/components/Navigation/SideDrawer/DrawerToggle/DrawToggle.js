import React from 'react';
import classes from './DrawToggle.module.css'


const drawerToggle = (props) => (
    <div 
        onClick={props.clicked}
        className={classes.DrawerToggle}
    >
        <div></div>
        <div></div>
        <div></div>
    </div>
);

export default drawerToggle;