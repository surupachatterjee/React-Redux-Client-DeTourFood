import * as constants from '../constants';

let initialState = {
    restaurants: []
};

const RestaurantReducer = (state=initialState, action) => {
    switch (action.type) {
        case constants.SEARCH_RESTAURANTS:
            return {
                restaurants: state.restaurants,
                searchedRestaurants: state.restaurants.filter(restaurant =>
                   String(restaurant.zomatoRest.restaurant.location.city).toLowerCase() === String(action.cityName).toLowerCase()
                )
            };
        case constants.FIND_ALL_RESTAURANTS:
            return {
                restaurants: action.restaurants,
                searchedRestaurants: state.searchedRestaurants
            };

        default: return state
    }
}

export default RestaurantReducer;