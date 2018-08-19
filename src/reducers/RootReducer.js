import {combineReducers} from 'redux';
import RestaurantReducer from "./RestaurantReducer";
import UserReducer from './UserReducer';
import MenuReducer from './MenuReducer';
import OrderReducer from './OrderReducer';

const RootReducer = combineReducers({
    UserReducer,
    RestaurantReducer,
    MenuReducer,
    OrderReducer
});

export default RootReducer;