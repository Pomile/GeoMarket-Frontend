import * as actionTypes from '../../../../types';

/**
 * @returns {object} object
 */
const getMarketsByNameAndLocationStart = () => {
    return {
        type: actionTypes.GET_MARKETS_BY_NAME_AND_LOCATION_START,
        payload: { loadingMarkets: true, marketsError: false }
    }
}

export default getMarketsByNameAndLocationStart;
