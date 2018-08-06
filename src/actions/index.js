import * as constants from "../constants";
import RestaurantService from '../services/restaurant.service.client';
import history from '../History';
const RESTAURANT_URL ="https://developers.zomato.com/api/v2.1";

export const findLocationDetailsByCity = (dispatch,cityName) => {
    history.push("/search");
     fetch(RESTAURANT_URL + "/locations?query=" + cityName,{
        headers:{

            'Accept': 'application/json',
            'user-key': '8f387705dbb342d6fe530909e541b0dd'//key value here
        }
    }).then(function (response) {
        console.log(response);
        return response.json();
    }).then(function (response) {
        let fetchedLoc = response.location_suggestions[0];
        console.log(fetchedLoc);
        return fetch(RESTAURANT_URL + "/search?q="+cityName
            +"&lat="+fetchedLoc.latitude
            +"&lon="+fetchedLoc.longitude
            +"&entity_id="+fetchedLoc.entity_id
            +"&sort=rating"
            +"&count=150",{
            headers:{
                'Accept': 'application/json',
                'user-key': '8f387705dbb342d6fe530909e541b0dd'//key value here
            }
        })
    }).then(function (response) {
        console.log(response);
        return response.json();
    }).then(restaurants => {
        return restaurants;
    }).then(restaurants => {
        dispatch({
            type: constants.FIND_LOCATION_DETAILS_BY_CITY,
            restaurants: restaurants
            /*RestaurantService
            //.instance
            .findAllRestaurants(city)
            /!*.then(restaurants => {
              if (restaurants) {
                  return restaurants;
              }
              return [];
            })*!/*/
        });
    })

}


