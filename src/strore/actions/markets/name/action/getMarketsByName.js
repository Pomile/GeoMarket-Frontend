import axios from 'axios';
import {
    getMarketsByNameFail,
    getMarketsByNameStart,
    getMarketsByNameSuccess
} from './state';
import dotenv from 'dotenv';


dotenv.config();
const baseUrl = process.env.NODE_ENV === 'development' ? 'http://localhost:8000' : '';

/**
 * 
 * @param {string} name
 * 
 */
const getMarketsByName = (name) => {
    return dispatch => {
        setTimeout(() => dispatch(getMarketsByNameStart()), 100);
        setTimeout(() => axios
            .get(`${baseUrl}/api/v1//markets/name?name=${name}`)
            .then(res => dispatch(getMarketsByNameSuccess(res.data.data)))
            .catch(err => dispatch(getMarketsByNameFail(err))), 100);
    }
}

export default getMarketsByName;
