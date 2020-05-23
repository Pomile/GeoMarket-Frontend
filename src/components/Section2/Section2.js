import React from 'react';
import Classes from './Section2.module.css';
import LogoHolder from './LogoHolder/LogoHolder';
import Backdrop from '../UI/Backdrop/Backdrop';
import Caption from './Caption/Caption';

const Section2 = (props) => {
    return (
        <div className={Classes.Section2Background}>
            <Backdrop>
                <LogoHolder />
                <Caption />
            </Backdrop>
            
        </div>
    )
}

export default Section2
