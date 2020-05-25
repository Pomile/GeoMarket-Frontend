import React, { Component } from 'react';
import Aux from '../../hoc/Wrapper';
import Classes from '../../Layout/Layout.module.css';

import Map from '../../components/Map/Map';
import Section1 from '../../components/Section1/Section1';
import Header from '../../components/Section1/Header/Header';
import imageSample from '../../assets/images/Kajola_market.jpg'
import Category from '../../components/Category/Category';
import MarketDetail from '../../components/Markets/MarketDetails/MarketDetail';

class Market extends Component {
    doNothing = () => {
        
    }
    render() {
        return (
            <Aux>
                <div className={Classes.Layout}>
                    <Section1>
                        <Header img={imageSample} />
                       <Category />
                        <MarketDetail nothing = {this.doNothing} />
                    </Section1>
                    <Map />
                </div>
            </Aux>
        )
    }
}



export default Market;
