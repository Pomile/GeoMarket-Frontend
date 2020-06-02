import * as actionTypes from '../../../../types';

/**
 * @returns {object} object
 */
const getMarketsByCategoryAndLocationSuccess = (data) => {
    return {
        type: actionTypes.GET_MARKETS_BY_CATEGORY_AND_LOCATION_SUCCESS,
        payload: { loadingMarkets: true, marketsError: false, markets: data }
    }
}

export default getMarketsByCategoryAndLocationSuccess;
