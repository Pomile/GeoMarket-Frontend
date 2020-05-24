import React from 'react';
import Classes from './Section2.module.css';

const Section2 = (props) => {
    const Bg = props.noBg === true ? Classes.Section2 : Classes.Section2Background
    return (
        <div className={Bg}>
            {props.children}
            
        </div>
    )
}

export default Section2
