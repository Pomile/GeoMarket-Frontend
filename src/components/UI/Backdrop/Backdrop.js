import React from 'react';
import classes from './Backdrop.module.css';

const Backdrop = (props) => {
    return <div className={[classes.Backdrop].join(' ')} >{props.children}</div>
}

export default Backdrop;
