import React from 'react';
import classes from './Modal.module.css';
import Aux from '../../../hoc/Auxiliary';
import Backdrop from '../Backdrop/Backdrop';


const modal = (props) => (
    <Aux>
        <Backdrop 
            show={props.show}
            clicked={props.modalClosed}
        />
        <div 
            className={classes.Modal}
            style={{
                // translateY(-100vh): slide off the screen
                transform: props.show ? 'translateY(0)' : 'translateY(-100vh)',
                // opacity: 0: transparent (not visible)
                opacity: props.show ? '1' : '0'
            }}
        >
            {props.children}
        </div>
    </Aux>
);

export default modal;