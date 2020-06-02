import * as actionTypes from '../../../../types';

/**
 * @returns {object} object
 */
const getMarketsByNameFail = () => {
    return {
        type: actionTypes.GET_MARKETS_BY_NAME_FAIL,
        payload: { loadingMarkets: false, marketsError: true }
    }
}

export default getMarketsByNameFail;
