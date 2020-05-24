import React, { Component } from 'react';

import Aux from '../../hoc/Wrapper';
import Classes from '../../Layout/Layout.module.css';
import MarketSection from '../../components/Section1/MarketSection';
import Map from '../../components/Map/Map';

class Market extends Component {
    render() {
        return (
            <Aux>
                <div className={Classes.Layout}>
                    <MarketSection />
                    <Map />
                </div>
            </Aux>
        )
    }
}



export default Market;
