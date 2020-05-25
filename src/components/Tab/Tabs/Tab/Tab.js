import React from 'react';
import Classes from './Tab.module.css';
import Button from '../../../Button/Button';

const Tab = (props) => {
    const style = props.active ? [Classes.Tab, Classes.active] : [Classes.Tab];
    return <Button style={style.join(" ")} name={props.name} clicked={props.clicked} />
}

export default Tab;
