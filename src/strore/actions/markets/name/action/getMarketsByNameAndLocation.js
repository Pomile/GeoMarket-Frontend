import axios from 'axios';
import {
    getMarketsByNameAndLocationFail,
    getMarketsByNameAndLocationStart,
    getMarketsByNameAndLocationSuccess
} from './state';
import dotenv from 'dotenv';


dotenv.config();
const baseUrl = process.env.NODE_ENV === 'development' ? 'http://localhost:8000' : '';

/**
 * 
 * @param {string} name
 * @param {string} location
 * 
 */
const getMarketsByNameAndLocation = (location, name) => {
    return dispatch => {
        setTimeout(() => dispatch(getMarketsByNameAndLocationStart()), 100);
        setTimeout(() => axios
            .get(`${baseUrl}/api/v1//markets/name_location?name=${name}&location=${location}&limit=20&offset=0`)
            .then(res => dispatch(getMarketsByNameAndLocationSuccess(res.data.data)))
            .catch(err => dispatch(getMarketsByNameAndLocationFail(err))), 100);
    }
}

export default getMarketsByNameAndLocation;
