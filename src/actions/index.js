import * as constants from "../constants";
import history from '../History';
import UserService from "../services/user.service.client";
import RestaurantService from '../services/restaurant.service.client';
const RESTAURANT_URL ="http://localhost:4000/api/restaurant";
//import MenuService from '../services/menu.service.client';
const MENU_URL = 'http://localhost:4000/api/menu';
const ORDER_URL = 'http://localhost:4000/api/order';
const USER_URL ="http://localhost:4000/api/user";

let restService = RestaurantService.instance;

export const findAllUsers = (dispatch) => {
    return fetch (USER_URL)
            .then((response) => {
                console.log(response)
                if(response!==null && response.status === 200)
                        return response.json();
                return null;
            }).then(users =>
                dispatch({
                        type: constants.FIND_ALL_USERS,
                    users: users
            })
        )
}

export const saveOrder = (dispatch, order) => {
    return fetch(ORDER_URL,{
            method:'PUT',
            body:JSON.stringify(order),
            headers:{
                'content-type':'application/json'
            },
        credentials: 'include',
        }).then((response) => {
            console.log(response);
            if(response!==null && response.status === 200)
                    return response.json();
            return null;
        }).then((order) =>  {
            dispatch({
                    type: constants.SAVE_ORDER,
                    order: order
            })
        }).then(() => {
            history.push('/home');
        })
}





export const addToOrder = (dispatch, orderItem) => {
    dispatch({
        type: constants.ADD_TO_ORDER,
        orderItem: orderItem
    })
}


export const changeMenuName = (dispatch, name) => {
    dispatch({
        type: constants.CHANGE_MENU_NAME,
        name: name
    })
}

export const changeMenuCuisine = (dispatch, cuisineName) => {
    dispatch({
        type: constants.CHANGE_MENU_CUISINE,
        cuisineName: cuisineName
    })
}

export const changeMenuItems = (dispatch, menuItems) => {
    dispatch({
        type: constants.CHANGE_MENU_ITEMS,
        menuItems: menuItems
    })
}

export const findMenuById = (dispatch, menuId) => {
    return fetch(MENU_URL + "/" + menuId)
        .then((response) => {
            console.log(response)
            if(response!==null && response.status === 200)
                return response.json();
            return null;
        }).then(menu =>
            dispatch({
                type: constants.FIND_MENU_BY_ID,
                menu: menu
            })
        )
}

export const updateRestaurantMenu = (dispatch, menuId, menu) => {
        return fetch(MENU_URL + "/" + menuId,{
                method:'PUT',
                body:JSON.stringify(menu),
                headers:{
                    'content-type':'application/json'
                },
            credentials: 'include',
            })
            .then((response) => {
                    console.log(response);
                    if(response!==null && response.status === 200)
                            return response.json();
                    return null;
                }).then(() =>{
                    if (menu) {
                        dispatch({
                            type: constants.UPDATE_RESTAURANT_MENU,
                            menu: menu,
                        })
                    }
                });
}

export const findRestaurantById = (dispatch, id) => {
    let restaurantTemp
    return fetch(RESTAURANT_URL + "/" + id)
        .then((response) => {
            console.log(response)
            if(response!==null && response.status === 200)
                return response.json();
            return null;
        }).then(restaurant => {
            restaurantTemp = restaurant
            if (restaurant.menu) {
                findMenuById(dispatch, restaurant.menu)
            }
            }).then(menu => {
            dispatch({
                type: constants.FIND_RESTAURANT_BY_ID,
                restaurant: restaurantTemp
            })
        })
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

export const createReview = (dispatch,review) => {
    restService.createReview(review)
        .then(review => {
            findRestaurantById(dispatch,review.restaurant)

        })
}
