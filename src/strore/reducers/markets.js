import utils from "../../shared/utils";
import * as actionTypes from '../actions/types';

const initialState = {
    loadingMarkets: false,
    offset: 0,
    marketsError: false,
    marketsErrorMessage: '',
    category: 'food',
    name: '',
    location: '',
    markets: []
};

const getMarketsByCatgeoryStart = (state, action) => {

    return utils.updateObject(state, action.payload)
}

const getMarketsByCatgeorySuccess = (state, action) => {

    return utils.updateObject(state, action.payload)
}


const getMarketsByCatgeoryFail = (state, action) => {

    return utils.updateObject(state, action.payload)
}

const resetMarkets = (state, action) => {

    return utils.updateObject(state, action.payload)
}

const setLocation = (state, action) => {
    console.log(action.payload);
    return utils.updateObject(state, action.payload)
}

const getMarketsByNameSuccess = (state, action) => {
    return utils.updateObject(state, action.payload)
}

const getMarketsByNameStart = (state, action) => {
    return utils.updateObject(state, action.payload)
}

const getMarketsByNameFail = (state, action) => {
    return utils.updateObject(state, action.payload)
}

const getMarketsByNameAndLocationSuccess = (state, action) => {
    return utils.updateObject(state, action.payload)
}

const getMarketsByNameAndLocationStart = (state, action) => {
    return utils.updateObject(state, action.payload)
}

const getMarketsByNameAndLocationFail = (state, action) => {
    return utils.updateObject(state, action.payload)
}

const getMarketsByCategoryAndLocationFail = (state, action) => {
    return utils.updateObject(state, action.payload)
}

const getMarketsByCategoryAndLocationSuccess = (state, action) => {
    return utils.updateObject(state, action.payload)
}

const getMarketsByCategoryAndLocationStart = (state, action) => {
    return utils.updateObject(state, action.payload)
}


const marketsReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.SET_MARKET_CATEGORY_VALUE: return utils.updateObject(state, action.payload);
        case actionTypes.SET_MARKET_NAME_VALUE: return utils.updateObject(state, action.payload);
        case actionTypes.SET_LOCATION: return setLocation(state, action);
        case actionTypes.GET_MARKETS_BY_CATEGORY_START: return getMarketsByCatgeoryStart(state, action);
        case actionTypes.GET_MARKETS_BY_CATEGORY_SUCCESS: return getMarketsByCatgeorySuccess(state, action);
        case actionTypes.GET_MARKETS_BY_CATEGORY_FAIL: return getMarketsByCatgeoryFail(state, action);
        case actionTypes.GET_MARKETS_BY_NAME_SUCCESS: return getMarketsByNameSuccess(state, action);
        case actionTypes.GET_MARKETS_BY_NAME_START: return getMarketsByNameStart(state, action);
        case actionTypes.GET_MARKETS_BY_NAME_FAIL: return getMarketsByNameFail(state, action);
        case actionTypes.GET_MARKETS_BY_NAME_AND_LOCATION_SUCCESS: return getMarketsByNameAndLocationSuccess(state, action);
        case actionTypes.GET_MARKETS_BY_NAME_AND_LOCATION_START: return getMarketsByNameAndLocationStart(state, action);
        case actionTypes.GET_MARKETS_BY_NAME_AND_LOCATION_FAIL: return getMarketsByNameAndLocationFail(state, action);
        case actionTypes.GET_MARKETS_BY_CATEGORY_AND_LOCATION_START: return getMarketsByCategoryAndLocationStart(state, action);
        case actionTypes.GET_MARKETS_BY_CATEGORY_AND_LOCATION_FAIL: return getMarketsByCategoryAndLocationFail(state, action);
        case actionTypes.GET_MARKETS_BY_CATEGORY_AND_LOCATION_SUCCESS: return getMarketsByCategoryAndLocationSuccess(state, action);
        case actionTypes.RESET_MARKETS: return resetMarkets(state, action);
        default: return state;
    }
}

export default marketsReducer;
