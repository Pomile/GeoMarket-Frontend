import React from 'react';
import Classes from './Tabs.module.css';
import Tab from './Tab/Tab';


const Tabs = (props) => {
    return (
        <div className={Classes.Tabs}>
            <Tab name={"Market info"} active={props.info} clicked={props.addMarket} />
            <Tab name={"Image"} active={props.image} clicked={props.addImage}/>
        </div>
    )
}

export default Tabs;
