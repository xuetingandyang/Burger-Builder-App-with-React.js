import React from 'react';
import classes from './Logo.module.css';
// make Webpack to aware of the images location
import burger from '../../assests/images/burger.jpg'

const logo = (props) => (
    <div className={classes.Logo} style={{height: props.height}}>
        <img src={burger} alt="MyBurger" />
    </div>
);

export default logo;