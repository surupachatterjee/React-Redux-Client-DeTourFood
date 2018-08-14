import * as constants from '../constants';

let initialState = {
    menu: [],
};

const MenuReducer = (state=initialState, action) => {
    switch (action.type) {
        case constants.FIND_ALL_MENUS_FOR_RESTAURANT:
            return {
                menu: action.menu
            };

        default: return state

        case constants.CREATE_MENU:
            return {
                menu: [
                    action.menu,
                    ...state.menu
                ],
            }

        case constants.DELETE_MENU:
            return {
                menu: state.menu.filter(
                    menu => menu.id !== action.menuId
                ),
            }

        case constants.UPDATE_MENU:

            let newState1 = {
                menu: state.menu.map(menu => {
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