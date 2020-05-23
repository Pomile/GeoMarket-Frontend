import React from 'react';
import Market from './Market/Market';
import Classes from './Markets.module.css';

const Markets = (props) => {
    const style = [Classes.Markets].join();
    return (
        <div className={style}>
            <Market />
            <Market />
            <Market />
            

        </div>
    )
}

export default Markets;
