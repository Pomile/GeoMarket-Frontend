import React from 'react';
import Market from '../Market/Market';
import Classes from './MarketDetail.module.css';
import MarketImages from '../../MarketImages/MarketImages';


const MarketDetail = (props) => {
    return (
        <div className={Classes.MarketDetail}>
            <Market clickable={false} clicked={props.nothing}/>
            <MarketImages />

        </div>
    )
}


export default MarketDetail;


