import {combineReducers} from 'redux';
import RestaurantReducer from "./RestaurantReducer";
import UserReducer from './UserReducer';
import MenuReducer from './MenuReducer';
import AdminReducer from './AdminReducer'
import OrderReducer from './OrderReducer';

const RootReducer = combineReducers({
    UserReducer,
    RestaurantReducer,
    MenuReducer,
    AdminReducer,
    MenuReducer,
    OrderReducer
});

export default RootReducer;