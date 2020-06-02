import * as actionTypes from '../../../../types';

/**
 * @returns {object} object
 */
const getMarketsByNameAndLocationFail = () => {
    return {
        type: actionTypes.GET_MARKETS_BY_NAME_AND_LOCATION_FAIL,
        payload: { loadingMarkets: false, marketsError: true, markets: [] }
    }
}

export default getMarketsByNameAndLocationFail;
