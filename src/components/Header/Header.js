import React from 'react';
import Classes from './Header.module.css';
import Search from '../Search/Search';

const Header = () => {
    return (
        <div className={Classes.Header}>
            <div className={Classes.SearchItem}><Search /></div>
            <div className={Classes.AdminName}>Babatunde</div>
        </div>
    )
}

export default Header;
