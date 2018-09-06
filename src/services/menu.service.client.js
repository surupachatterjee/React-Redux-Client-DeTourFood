const MENU_URL = 'https://detour-food-backend-stc.herokuapp.com/api/restaurant/RID/menu';

let _singleton = Symbol();

class MenuService {

    constructor(singletonToken) {
        if (_singleton !== singletonToken)
            throw new Error('Singleton!!!');
    }

    static get instance() {
        if(!this[_singleton])
            this[_singleton] = new MenuService(_singleton);
        return this[_singleton]
    }

    findAllMenusForRestaurant(restaurantId) {
        return fetch(
            MENU_URL
                .replace('RID', restaurantId))
            .then((response) => {
                console.log(response)
                if(response!==null && response.status === 200)
                    return response.json();
                return null;
            });
    }

    createMenu(restaurantId, menu) {
        return fetch(MENU_URL.replace('RID', restaurantId),
            {
                body: JSON.stringify(menu),
                headers: { 'Content-Type': 'application/json' },
                method: 'POST'
            }).then(response => response.json());
    }

    deleteMenu(restaurantId, menuId) {
        return fetch(MENU_URL.replace('RID', restaurantId) + "/" + menuId, {
            method: 'DELETE'
        })
    };

    updateRestaurantMenu(menu, restaurantId) {
        return fetch(MENU_URL.replace('RID', restaurantId) + '/' + menuId,
            {
                body: JSON.stringify(menu),
                headers: { 'Content-Type': 'application/json' },
                method: 'PUT'
            }).then(response => response.json());
    }

    findMenuById(menuId) {
        return fetch(MENU_URL + '/' + menuId)
            .then(response => response.json());
    };
}
