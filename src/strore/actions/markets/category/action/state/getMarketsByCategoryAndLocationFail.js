import * as actionTypes from '../../../../types';

/**
 * @returns {object} object
 */
const getMarketsByCategoryAndLocationFail = () => {
    return {
        type: actionTypes.GET_MARKETS_BY_CATEGORY_AND_LOCATION_FAIL,
        payload: { loadingMarkets: false, marketsError: true, markets: [] }
    }
}

export default getMarketsByCategoryAndLocationFail;
