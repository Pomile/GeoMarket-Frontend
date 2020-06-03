import React from 'react';
import classes from './Search.module.css';


const Search = (props) => {
    console.log(props.marketName);
    const { marketName, location } = props;
    
    let getMarkets;
    if (location !== '') {
        getMarkets = () => props.getMarketsByNameAndLocation(location, marketName)
    } else{
        getMarkets = () => props.getMarketsByName(marketName);
    }
    
    return (
        <div className={classes.SearchBox}>
            <span className={classes.SearchFilter}>
                <i className="fas fa-location-arrow"></i>
            </span>
            <input type="text" name="search" id="search" placeholder="Market Name"  onChange={(event) => props.setMarketName(event)}/>
            <button className={classes.SearchButton} onClick={getMarkets}><i className="fas fa-search"></i></button>
        </div>
    );
}

export default Search;
