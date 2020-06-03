import * as actionTypes from '../../../../types';

/**
 * @returns {object} object
 */
const getMarketsByCategoryStart = () => {
    return {
        type: actionTypes.GET_MARKETS_BY_CATEGORY_START,
        payload: { loadingMarkets: true, marketsError: false }
    }
}

export default getMarketsByCategoryStart;
