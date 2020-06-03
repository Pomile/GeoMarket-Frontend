import * as actionTypes from '../../../types';
const setMarketCategory = (event) => {
    event.preventDefault();
    return {
        type: actionTypes.SET_MARKET_CATEGORY_VALUE,
        payload: { category: event.target.value }
    }
}

export default setMarketCategory;
