import * as actionTypes from '../types';
const displayLocationBox = (status) => {
    return {
        type: actionTypes.SET_DISPLAY_LOCATION,
        payload: {displayLocationBox: status}
    }
}

export default displayLocationBox;
