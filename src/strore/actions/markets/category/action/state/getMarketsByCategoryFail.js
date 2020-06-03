import * as actionTypes from '../../../../types';

/**
 * @returns {object} object
 */
const getMarketsByCategoryFail = () => {
    return {
        type: actionTypes.GET_MARKETS_BY_CATEGORY_FAIL,
        payload: { loadingMarkets: false, marketsError: true, markets: [] }
    }
}

export default getMarketsByCategoryFail;
