import React from 'react';
import Market from './Market/Market';
import Classes from './Markets.module.css';

const Markets = (props) => {
    const style = props.style2 ? [Classes.Markets, Classes.MarketsStyle2].join(" ") : [Classes.Markets, Classes.MarketsStyle1].join(" ");
    const markets = props.markets.map((market) => <Market clickable={true} clicked={props.marketHandler} market={market} key={market.id} id={market.id} />)
    return (
        <div className={style}>
            {markets}
        </div>
    )
}

export default Markets;
