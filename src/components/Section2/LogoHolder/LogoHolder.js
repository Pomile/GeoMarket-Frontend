import React from 'react';
import Logo from '../../../assets/images/logo.png';
import Classes from './LogoHolder.module.css';

const LogoHolder = (props) => {
    return (
        <div className={Classes.LogoHolder}>
            <img src={Logo} alt="logo" />
        </div>
    )
}

export default LogoHolder;
