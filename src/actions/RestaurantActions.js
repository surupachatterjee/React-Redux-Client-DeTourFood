import history from '../History';
import * as constants from "../constants";
import RestaurantService from '../services/restaurant.service.client';
import swal from '../../node_modules/sweetalert'

let restService = RestaurantService.instance;

export const createRestUser = (dispatch, user) => {
    restService.createRestUser(user)
        .then(user => {
            if (user.username === "Username Already Exists") {
                swal(user.username);
                history.push("/registerUser");
            }
            else {
                dispatch({
                    type: constants.CREATE_USER,
                    user: user
                });
                history.push("/home");
            }
        });

}

export const fetchAllRestaurantDetails = (dispatch) => {
    restService.fetchAllRestaurantDetails()
        .then( restaurants => {
            dispatch({
                type: constants.GET_ALL_RESTAURANTS,
                restaurants: restaurants
            });
        })

}



export const changeStatus =(dispatch,restaurantId,restStatus) => {
        restService.changeStatus(restaurantId,restStatus)
            .then(() => fetchAllRestaurantDetails(dispatch))

}