import React from 'react';
import Header from './Header/Header';
import Category from '../Category/Category';
import Classes from './Section1.module.css';
import imageSample from '../../assets/images/Kajola_market.jpg'
import MarketDetail from '../Markets/MarketDetails/MarketDetail';

const MarketSection = (props) => {
    return (
        <div className={Classes.Section1}>
            <Header img={imageSample}/>
            <Category />
            <MarketDetail />
            
        </div>
    )
}

export default MarketSection;