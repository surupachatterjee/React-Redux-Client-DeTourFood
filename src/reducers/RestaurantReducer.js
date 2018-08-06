import * as constants from '../constants';

let initialState = {
    restaurants: []
};

export const RestaurantReducer = (state=initialState, action) => {
    let newState;
    switch (action.type) {
        case constants.FETCH_ALL_RESTAURANTS:

        default: return state
    }
}