import React from 'react';
import Classes from './MarketImages.module.css';
import MarketImage from './MarketImage/MarketImage';

const MarketImages = (props) => {

    return (
        <div className={Classes.MarketImages}>
            <MarketImage />
            <MarketImage />
        </div>
    )
}


export default MarketImages;
