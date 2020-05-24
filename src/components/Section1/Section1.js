import React from 'react';
import Classes from './Section1.module.css';


const Section1 = (props) => {
    return (
        <div className={Classes.Section1}>
           {props.children}
        </div>
    )
}

export default Section1
