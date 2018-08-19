import * as constants from '../constants';

let initialState = {
    menu: '',
    name: '',
    cuisineName: '',
    menuItems: ''
};

const MenuReducer = (state=initialState, action) => {
    switch (action.type) {
        /*case constants.FIND_ALL_MENUS_FOR_RESTAURANT:
            return {
                menus: action.menus
            };
        case constants.CREATE_MENU:
            return {
                menus: [
                    action.menus,
                    ...state.menus
                ],
            }

        case constants.DELETE_MENU:
            return {
                menus: state.menus.filter(
                    menu => menu.id !== action.menuId
                ),
            }

        case constants.UPDATE_MENU:

            let newState1 = {
                menus: state.menus.map(menu => {
                    if(menu.id === action.menu.id) {
                        return action.menu
                    } else {
                        return menu
                    }
                }),
            }*/

        case constants.FIND_MENU_BY_ID:

            return {
                menu: action.menu,
                name: action.menu.name,
                cuisineName: action.menu.cuisineName,
                menuItems: action.menu.menuItems
            }
        case constants.UPDATE_RESTAURANT_MENU:
            return {
                menu: action.menu,
                name: action.menu.name,
                cuisineName: action.menu.cuisineName,
                menuItems: action.menu.menuItems
            };
        case constants.CHANGE_MENU_NAME:
            return {
                menu: state.menu,
                name: action.name,
                cuisineName: state.cuisineName,
                menuItems: state.menuItems
            };
        case constants.CHANGE_MENU_CUISINE:
            return {
                menu: state.menu,
                name: state.name,
                cuisineName: action.cuisineName,
                menuItems: state.menuItems
            };
        case constants.CHANGE_MENU_ITEMS:
            return {
                menu: state.menu,
                name: state.name,
                cuisineName: state.cuisineName,
                menuItems: action.menuItems
            };


        default: return state
    }
}



export default MenuReducer;