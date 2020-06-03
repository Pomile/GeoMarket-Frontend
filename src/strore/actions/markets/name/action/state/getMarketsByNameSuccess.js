import * as actionTypes from '../../../../types';

/**
 * @returns {object} object
 */
const getMarketsByNameSuccess = (data) => {
    console.log(data)
    return {
        type: actionTypes.GET_MARKETS_BY_NAME_SUCCESS,
        payload: { loadingMarkets: false, marketsError: false, markets: data }
    }
}

export default getMarketsByNameSuccess;
