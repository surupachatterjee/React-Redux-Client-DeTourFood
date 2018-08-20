import {combineReducers} from 'redux';
import RestaurantReducer from "./RestaurantReducer";
import UserReducer from './UserReducer';
import MenuReducer from './MenuReducer';
import AdminReducer from './AdminReducer'

const RootReducer = combineReducers({
    UserReducer,
    RestaurantReducer,
    MenuReducer,
    AdminReducer
});

export default RootReducer;