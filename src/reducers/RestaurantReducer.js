import * as constants from '../constants';

let initialState = {
    restaurants: [],
    searchedRestaurants: [],
    selectedRestaurant: ''
};

const RestaurantReducer = (state=initialState, action) => {
    switch (action.type) {
        case constants.SEARCH_RESTAURANTS:
            return {
                restaurants: state.restaurants,
                searchedRestaurants: state.restaurants.filter(restaurant =>
                   restaurant.zomatoRest.restaurant.location.city === action.cityName
                ),
                selectedRestaurant: state.selectedRestaurant
            };
        case constants.FIND_ALL_RESTAURANTS:
            return {
                restaurants: action.restaurants,
                searchedRestaurants: state.searchedRestaurants,
                selectedRestaurant: state.selectedRestaurant
            };
        case constants.FIND_RESTAURANT_BY_ID:
            return {
                restaurants: state.restaurants,
                searchedRestaurants: state.searchedRestaurants,
                selectedRestaurant: action.restaurant
            };

        default: return state

    }
}

export default RestaurantReducer;