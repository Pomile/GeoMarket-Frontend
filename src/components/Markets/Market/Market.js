import React from 'react';
import Classes from './Market.module.css';

const Market = (props) => {
    return (
        <div className={Classes.Market}>
            <p>
                <span className={Classes.Header}>Kajola market</span><br /><br />
                342 Bently street, Fadeyi, Mushin Lagos
            </p>

        </div>
    )
}

export default Market;
