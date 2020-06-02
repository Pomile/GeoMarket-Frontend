import React from 'react';
import Classes from './DropDownContent.module.css';


const LocationDropDownContent = (props) => {
    
    const location = props.location ? <li className={Classes.Item}>{props.location}</li> : null;
    const display = props.display ? (<ul className={Classes.DropDownContent}>
        <li className={[Classes.Item, Classes.Active].join(" ")}>All</li>
        {location}
    </ul>) : null

    return display;
}

export default LocationDropDownContent;
