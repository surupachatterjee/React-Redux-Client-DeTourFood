import * as constants from '../constants';

let initialState = {
    restaurants: [],
    users:[],
    editableUser:''
};

const AdminReducer = (state=initialState, action) => {
    switch (action.type) {
        case constants.GET_ALL_RESTAURANTS:
            return {
                ...state,
                restaurants: action.restaurants
            };
        case constants.GET_ALL_USERS:
            return {
                ...state,
                users: action.users
            };
        case constants.CHANGE_RESTAURANT_STATUS:
            let index = state.restaurants.findIndex((rest) => rest._id === action.restaurant._id)
            return{
                ...state,
                restaurants:state.restaurants.map(rest => {
                    if(rest._id === action.restaurant._id){
                       return state.restaurants[index] = action.restaurant
                    }
                    return rest;
                })
            };
        case constants.UPDATE_EDITABLE_USER:
            return{
                ...state,
                editableUser:action.user
            };
        case constants.DELETE_USER:
            return{
                ...state,
                users: state.users.filter(user => user._id !== action.userId)
            }
        default: return state
    }
}

export default AdminReducer;