import axios from 'axios';
import {
    getMarketsByCategoryAndLocationStart,
    getMarketsByCategoryAndLocationFail,
    getMarketsByCategoryAndLocationSuccess
} from './state';

import dotenv from 'dotenv';

dotenv.config();
const baseUrl = process.env.NODE_ENV === 'development' ? 'http://localhost:8000' : '';

/**
 * 
 * @param {string} category
 */
const getMarketsByCategoryAndLocation = (data) => {
    const { category, location } = data;
    const url = `${baseUrl}/api/v1/markets/category_location?category=${category}&location=${location}&limit=20&offset=0`;
    console.log(url);
    return dispatch => {
        setTimeout(() => dispatch(getMarketsByCategoryAndLocationStart()), 100);
        setTimeout(() => axios
            .get(url)
            .then(res => dispatch(getMarketsByCategoryAndLocationSuccess(res.data.data)))
            .catch(err => dispatch(getMarketsByCategoryAndLocationFail(err))), 100);
    }
}

export default getMarketsByCategoryAndLocation ;
