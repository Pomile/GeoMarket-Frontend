import React from 'react';
import Classes from './Market.module.css';

const Market = (props) => {
    return (
        <div className={Classes.Market} onClick={() => props.clicked()}>
            <p>
                <span className={Classes.Header}>{props.market.name} market</span><br /><br />
                {props.market.street}, {props.market.state}, {props.market.country}
            </p>

        </div>
    )
}

export default Market;
