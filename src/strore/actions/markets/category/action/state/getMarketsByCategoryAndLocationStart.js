import * as actionTypes from '../../../../types';

/**
 * @returns {object} object
 */
const getMarketsByCategoryAndLocationStart = () => {
    return {
        type: actionTypes.GET_MARKETS_BY_CATEGORY_AND_LOCATION_START,
        payload: { loadingMarkets: true, marketsError: false }
    }
}

export default getMarketsByCategoryAndLocationStart;
