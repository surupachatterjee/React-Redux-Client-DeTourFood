import * as constants from "../constants";
import history from '../History';
import RestaurantService from '../services/restaurant.service.client';
const RESTAURANT_URL ="https://developers.zomato.com/api/v2.1";
//import MenuService from '../services/menu.service.client';
const MENU_URL = 'https://localhost:4000/api/restaurant/RID/menu';


export const findLocationDetailsByCity = (dispatch,cityName) => {
    history.push("/search");
     fetch(RESTAURANT_URL + "/locations?query=" + cityName,{
        headers:{

            'Accept': 'application/json',
            'user-key': '8f387705dbb342d6fe530909e541b0dd'//key value here
        }
    }).then(function (response) {
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
        return response.json();
    }).then(searchResults => {
        return searchResults.restaurants;
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

export const findAllMenusForRestaurant = (dispatch, restaurantId) => {
    history.push("/menu");
    fetch(MENU_URL + restaurantId + '/menu')
        .then((response) => {
            console.log(response)
            var content = response.headers.get("content-type");
            if(content!=null && content.startsWith('application/json')) {
                return response.json();
            }
            return [];
        }).then(menus=> dispatch({
        type:constants.FIND_ALL_MENUS_FOR_RESTAURANT,
        menus:menus,
        restaurantId: restaurantId})
    )
}

export const createMenu = (dispatch, menu) => dispatch({
    type: constants.CREATE_MENU,
    widget: menu
});


export const deleteMenu = (dispatch,menuId) => dispatch({
    type: constants.DELETE_MENU,
    widgetId: menuId
});


export const updateMenu = (dispatch,menu) => dispatch({
    type: constants.UPDATE_MENU,
    widget: menu
});
