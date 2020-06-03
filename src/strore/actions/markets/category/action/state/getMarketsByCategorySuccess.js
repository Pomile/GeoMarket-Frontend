import * as actionTypes from '../../../../types';

/**
 * @returns {object} object
 */
const getMarketsByCategorySuccess = (data) => {
    return {
        type: actionTypes.GET_MARKETS_BY_CATEGORY_SUCCESS,
        payload: { loadingMarkets: false, marketsError: false, markets: data }
    }
}

export default getMarketsByCategorySuccess;
