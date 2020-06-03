import React from 'react';
import Classes from './Location.module.css';


const Location = (props) => {
    let style;
    if (props.show === null) {
        style = Classes.Location;
    } else if (props.show === false) {
        style = [Classes.Location, Classes.LocationAnimationBackward].join(" ")  
    } else {
        style = [Classes.Location, Classes.LocationAnimationForward].join(" ")  
    }
    return (
        <div className={style}>
            <div className={Classes.Close}><i className="fas fa-times-circle" onClick={()=> props.setDisplay(false)}></i></div>
            <p>Where do you want to start your search from?</p>
            <div className={Classes.LocationData}>
                <input list="location" name="location" onChange={(event) => props.change(event)} placeholder="State, Country"/>
                <datalist id="location">
                    <option value="Lagos, Nigeria" />
                    <option value="New York, USA"/>
                    <option value="Cape Town, South-Africa" />
                    <option value="Berlin, Germany"/>
                    <option value="Mumbai, India" />
                </datalist>
            </div>
            <div className={Classes.LocationExample}>Example: New York, USA</div>
        </div>
    )
}

export default Location;
