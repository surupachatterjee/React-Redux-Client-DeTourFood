import {createStore} from 'redux';
import RootReducer from '../reducers/RootReducer';

let Store = createStore(RootReducer);

export default Store;
