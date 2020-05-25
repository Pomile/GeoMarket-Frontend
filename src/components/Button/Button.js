import React from 'react';

const Button = (props) => {
    console.log(props.clicked)
    return (
        <button className={props.style} onClick={()=>props.clicked()}>{props.name}</button>
    )
}

export default Button;
