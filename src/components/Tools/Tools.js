import React from 'react';
import Classes from './Tools.module.css';
import add from '../../assets/images/add.jpg';
import show_all from '../../assets/images/show_all.png';


const Tools = (props) => {
    return (
        <div className={Classes.Tools}>
            <div className={Classes.ToolsItem}>
                <img src={add} alt={"add Market"} />
                
            </div>
            <div className={Classes.ToolsItem}>
                <img src={show_all} alt={"Markets"} />
            </div>
        </div>
    )
}

export default Tools;
