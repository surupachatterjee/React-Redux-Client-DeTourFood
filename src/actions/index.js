import * as constants from "../constants";
import history from '../History';
import UserService from "../services/user.service.client";
import RestaurantService from '../services/restaurant.service.client';
const RESTAURANT_URL ="http://localhost:4000/api/restaurant";
//import MenuService from '../services/menu.service.client';
const MENU_URL = 'http://localhost:4000/api/restaurant/RID/menu';

export const updateRestaurantMenu = (dispatch, menu, restaurantId) => {
        alert(JSON.stringify(menu));
        return fetch(RESTAURANT_URL + "/" + restaurantId + '/menu',{
                method:'PUT',
                body:JSON.stringify(menu),
                headers:{
                    'content-type':'application/json'
                },
            credentials: 'include',
            })
            .then((response) => {
                    console.log(response)
                    if(response!==null && response.status === 200)
                            return response.json();
                    return null;
                }).then(restaurant =>{
                    dispatch({
                            type: constants.UPDATE_RESTAURANT_MENU,
                            menu: restaurant,
                        })
                });
}

export const findRestaurantById = (dispatch, id) => {
    return fetch(RESTAURANT_URL + "/" + id)
        .then((response) => {
            console.log(response)
            if(response!==null && response.status === 200)
                return response.json();
            return null;
        }).then(restaurant =>
            dispatch({
                type: constants.FIND_RESTAURANT_BY_ID,
                restaurant: restaurant
            })
        )
}

export const findAllRestaurants = (dispatch) => {
    return fetch (RESTAURANT_URL)
        .then((response) => {
            console.log(response)
            if(response!==null && response.status === 200)
                return response.json();
            return null;
        }).then(restaurants =>
            dispatch({
                type: constants.FIND_ALL_RESTAURANTS,
                restaurants: restaurants
            })
        )
}

export const searchRestaurants = (dispatch,cityName) =>
    dispatch({
        type: constants.SEARCH_RESTAURANTS,
        cityName: cityName
    });

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
    menu: menu
});


export const deleteMenu = (dispatch,menuId) => dispatch({
    type: constants.DELETE_MENU,
    menuId: menuId
});


export const updateMenu = (dispatch,menu) => dispatch({
    type: constants.UPDATE_MENU,
    menu: menu
});
