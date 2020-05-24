import React from 'react';
import Classes from './MarketImage.module.css';
import market from '../../../assets/images/Kajola_market.jpg';

const MarketImage = (props) => {

    return (
        <div className={Classes.MarketImage}>
            <img src={market} alt={"kajola"} />
        </div>
    )
}


export default MarketImage;
