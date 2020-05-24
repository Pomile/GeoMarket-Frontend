import React from 'react';
import Classes from './Header.module.css';
import Search from '../../Search/Search';

const Section1Header = (props) => {
    let img;
    let imgStyle;
    let style; 
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
            <Search />
            
        </div> 
    );

}

export default Section1Header;
