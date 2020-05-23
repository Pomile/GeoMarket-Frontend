import React from 'react';
import classes from './Search.module.css';
import searchBtnIcon from '../../assets/images/searchIcon.png'


const Search = (props) => {
    return (
        <div className={classes.SearchBox}>
            <input type="text" name="search" id="search" placeholder="Market Name" />
            <button className={classes.SearchButton}><img  src={searchBtnIcon} alt="Search" /></button>
        </div>
    );
}

export default Search;
