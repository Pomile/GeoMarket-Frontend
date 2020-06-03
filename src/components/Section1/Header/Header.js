import React from 'react';
import Classes from './Header.module.css';
import Search from '../../Search/Search';

const Section1Header = (props) => {
    let img;
    let imgStyle;
    let style;
    const location = props.location === undefined || props.location.trim() === ''
        ? 'Click here to set your search location'
        : props.location;
    if (props.img !== undefined) {
        img = props.img 
        console.log(img);
        imgStyle = {
            backgroundImage: `url(${img})`
        }
        style = [Classes.Section1Header, Classes.Section1HeaderBgImg].join(" ");
        console.log(style);
    } else {
        style = Classes.Section1Header; 
    }
    return (

        <div className={style} style={imgStyle}>
            <Search
                marketName={props.marketName}
                setMarketName={props.setMarketName}
                location={props.location}
                getMarketsByName={props.getMarketsByName}
                getMarketsByNameAndLocation={props.getMarketsByNameAndLocation}
            />
            <p style={{ color: 'white', fontSize: 13, cursor: 'pointer' }} onClick={() => props.setDisplayLocationBox(true)}>{location}</p>
            
        </div> 
    );

}

export default Section1Header;
