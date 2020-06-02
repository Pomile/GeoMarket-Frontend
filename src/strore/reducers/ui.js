import utils from "../../shared/utils";
import * as actionTypes from '../actions/types';

const initialState = {
    displayLocationBox: null,
};

const setDisplayLocationBox = (state, action) => {

    return utils.updateObject(state, action.payload)
}

const uiReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.SET_DISPLAY_LOCATION: return setDisplayLocationBox(state, action)
        default: return state;
    }
}

export default uiReducer;
