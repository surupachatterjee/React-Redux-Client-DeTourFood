import {combineReducers} from 'redux';
import RestaurantReducer from "./RestaurantReducer";
import MenuReducer from './MenuReducer';

const RootReducer = combineReducers({
    RestaurantReducer,
    MenuReducer
});

export default RootReducer;