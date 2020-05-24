import React from 'react';
import Market from './Market/Market';
import Classes from './Markets.module.css';

const Markets = (props) => {
    const style = props.style2 ? [Classes.Markets, Classes.MarketsStyle2].join(" ") : [Classes.Markets, Classes.MarketsStyle1].join(" ");
    return (
        <div className={style}>
            <Market />
            <Market />
            <Market />
        </div>
    )
}

export default Markets;
