import * as constants from '../constants';

let initialState = {
    restaurants: []
};

const RestaurantReducer = (state=initialState, action) => {
    switch (action.type) {
        case constants.SEARCH_RESTAURANTS:
            return {
                restaurants: action.restaurants
            };

        default: return state
    }
}

export default RestaurantReducer;