import React from 'react';
import Classes from './Header.module.css';
import logo from '../../../assets/images/logo.png'

const AdminHeader = (props) => {
    return (

        <div className={Classes.AdminHeader}>
            <center><img src={logo} alt="GeoMarket" /></center>

        </div>
    );

}


export default AdminHeader;
