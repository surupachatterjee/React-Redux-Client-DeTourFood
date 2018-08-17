import {combineReducers} from 'redux';
import RestaurantReducer from "./RestaurantReducer";
import UserReducer from './UserReducer';

const RootReducer = combineReducers({
    RestaurantReducer,
    UserReducer

});

export default RootReducer;