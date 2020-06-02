import * as actionTypes from '../../../../types';

/**
 * @returns {object} object
 */
const getMarketsByNameAndLocationSuccess = (data) => {
    return {
        type: actionTypes.GET_MARKETS_BY_NAME_AND_LOCATION_SUCCESS,
        payload: { loadingMarkets: true, marketsError: false, markets: data }
    }
}

export default getMarketsByNameAndLocationSuccess;
