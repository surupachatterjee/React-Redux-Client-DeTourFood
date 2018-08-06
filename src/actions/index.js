import * as constants from "../constants";
import RestaurantService from '../services/restaurant.service.client';
import history from '../History';

export const findLocationDetailsByCity = (dispatch,city) => {
    history.push("/search");
    dispatch({
        type: constants.FIND_LOCATION_DETAILS_BY_CITY,
        restaurants: RestaurantService
        .instance
        .findLocationDetailsByCity(city)
        .then(restaurants => {
          if (restaurants) {
              return restaurants;
          }
          return [];
        })
    });
}


