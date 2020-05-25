import React from 'react';
import Classes from './MarketImageForm.module.css';
import removeImage from '../../assets/images/remove-image.png';
import defaultImage from '../../assets/images/Kajola_market.jpg';
import Button from '../Button/Button';

const MarketImageForm = (props) => {
   
    return (
        <div className={Classes.MarketImageForm}>
            <div className={Classes.MarketImageHolder}>
                <img src={defaultImage} alt={"market"}/>
                <div className={Classes.MarketImageFormIcon}><img src={removeImage} alt={"removeImage"} /></div>
                <div className={Classes.MarketImagesHolder}>
                    <div className={Classes.ImageScroll}>
                        <div className={Classes.img} > <img src={defaultImage} alt={"market"} /></div>
                        <div className={Classes.img} > <img src={defaultImage} alt={"market"} /></div>
                        <div className={Classes.img} > <img src={defaultImage} alt={"market"} /></div>
                        <div className={Classes.img} > <img src={defaultImage} alt={"market"} /></div>
                    </div>
                </div>
            </div>
            <center><Button name={"Upload"} style={Classes.Button} clicked={props.upload} /></center>
        </div>
    
    )
}

export default MarketImageForm;
