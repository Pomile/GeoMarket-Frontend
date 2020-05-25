import React from 'react';
import classes from './Backdrop.module.css';

const Backdrop = (props) => {
    const style = props.full ? [classes.Backdrop, classes.BackdropFixed].join(' ') : [classes.Backdrop].join(' ')
    return <div className={style} >{props.children}</div>
}

export default Backdrop;
