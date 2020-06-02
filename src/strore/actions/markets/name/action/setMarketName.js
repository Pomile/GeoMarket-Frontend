import * as actionTypes from '../../../types';
const setMarketName = (event) => {
    event.preventDefault();
    return {
        type: actionTypes.SET_MARKET_NAME_VALUE,
        payload: { marketName: event.target.value }
    }
}

export default setMarketName;
