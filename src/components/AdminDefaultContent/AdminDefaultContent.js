import React from 'react';
import Classes from './AdminDefaultContent.module.css';
import image from '../../assets/images/farmer.png';

const AdminDefaultContent = (props) => {
    return (
        <div className={Classes.AdminDefaultContent}>
            <img src={image} alt={"Admin"}/>
        </div>
    )
}


export default AdminDefaultContent;
