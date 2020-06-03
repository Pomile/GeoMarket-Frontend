import axios from 'axios';
import {
    getMarketsByCategoryFail,
    getMarketsByCategoryStart,
    getMarketsByCategorySuccess
} from './state';

import dotenv from 'dotenv';

dotenv.config();
const baseUrl  = process.env.NODE_ENV === 'development'? 'http://localhost:8000': '';

/**
 * 
 * @param {string} category
 */
const getMarketsByCategory = (data) => {
    const { category } = data;
    const url = `${baseUrl}/api/v1/markets/category?category=${category}&limit=20&offset=0`;
    console.log(url);
    return dispatch => {
        setTimeout(() => dispatch(getMarketsByCategoryStart()), 100);
        setTimeout(() => axios
            .get(url)
            .then(res => dispatch(getMarketsByCategorySuccess(res.data.data)))
            .catch(err => dispatch(getMarketsByCategoryFail(err))), 100);
    }
}

export default getMarketsByCategory;
