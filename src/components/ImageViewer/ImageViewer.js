import React from 'react'
import Classes from './ImageViewer.module.css';
import kajola from '../../assets/images/Kajola_market.jpg';
import addImage from '../../assets/images/add-image.png';


const ImageViewer = (props) => {
    
    return (
        <div className={Classes.ImageViewer}>
            <h1 className={Classes.close} onClick={() =>props.close()}><i class="far fa-times-circle"></i></h1>
            <img src={kajola} alt="kajola" />
            <div className={Classes.ImageViewerIcon}>
                <img src={addImage} alt="addImage" />
            </div>
      </div>  
    );

}

export default ImageViewer;
