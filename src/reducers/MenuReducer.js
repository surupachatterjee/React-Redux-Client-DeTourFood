import * as constants from '../constants';

let initialState = {
    menus: [],
};

const MenuReducer = (state=initialState, action) => {
    switch (action.type) {
        case constants.FIND_ALL_MENUS_FOR_RESTAURANT:
            return {
                menus: action.menus
            };

        default: return state

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
            }
    }
}



export default MenuReducer;