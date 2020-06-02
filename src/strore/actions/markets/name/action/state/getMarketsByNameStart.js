import * as actionTypes from '../../../../types';

/**
 * @returns {object} object
 */
const getMarketsByNameStart = () => {
    return {
        type: actionTypes.GET_MARKETS_BY_NAME_START,
        payload: { loadingMarkets: true, marketsError: false }
    }
}

export default getMarketsByNameStart;
