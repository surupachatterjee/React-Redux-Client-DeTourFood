import * as constants from '../constants';

let initialState = {
    restaurants: [
        {name: 'Shankar Sagar'},
        {name: 'Shiv Sagar'},
        {name: 'abcd'}
    ]
};

export const RestaurantReducer = (state=initialState, action) => {
    switch (action.type) {
        case constants.FIND_LOCATION_DETAILS_BY_CITY:
            return {
                restaurants: action.restaurants
            };

        default: return state
    }
}