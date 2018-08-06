import * as constants from '../constants';

let initialState = {
    restaurants: [
        {id: 1, name: 'Shankar Sagar'},
        {id: 2, name: 'Shiv Sagar'},
        {id: 3, name: 'abcd'}
    ]
};

const RestaurantReducer = (state=initialState, action) => {
    switch (action.type) {
        case constants.FIND_LOCATION_DETAILS_BY_CITY:
            return {
                restaurants: action.restaurants
            };

        default: return state
    }
}

export default RestaurantReducer;