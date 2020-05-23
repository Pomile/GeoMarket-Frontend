import React from 'react';
import Classes from './Header.module.css';
import Search from '../../Search/Search';
const Section1Header = (props) => {
    
    return (

        <div className={Classes.Section1Header}>
            <Search />
            
        </div> 
    );

}

export default Section1Header;
