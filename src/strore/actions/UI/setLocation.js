import * as actionTypes from '../types';
const setLocation = (event) => {
    event.preventDefault();
    return {
        type: actionTypes.SET_LOCATION,
        payload: { location: event.target.value }
    }
}

export default setLocation;
