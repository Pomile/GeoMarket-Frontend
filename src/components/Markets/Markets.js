import React from 'react';
import Market from './Market/Market';
import Classes from './Markets.module.css';

const Markets = (props) => {
    const style = props.style2 ? [Classes.Markets, Classes.MarketsStyle2].join(" ") : [Classes.Markets, Classes.MarketsStyle1].join(" ");
    return (
        <div className={style}>
            <Market clickable={true} clicked={props.market}/>
            <Market clickable={true} clicked={props.market}/>
            <Market clickable={true} clicked={props.market}/>
        </div>
    )
}

export default Markets;
