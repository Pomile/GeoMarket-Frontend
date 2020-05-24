import React from 'react';
import Classes from './Map.module.css';

const Map = (props) => {
    return (
        <div className={Classes.Map} id={"map"}>
            <h2 style={{textAlign: 'center'}}>Map</h2>
        </div>
    )
}

export default Map;
