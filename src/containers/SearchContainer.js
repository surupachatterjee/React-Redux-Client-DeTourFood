import {connect} from 'react-redux'
import * as actions from '../actions';
import SearchComponent from '../components/SearchComponent';
import RestaurantReducer from '../reducers/RestaurantReducer';

const stateToPropertyMapper = (state) => (
    {
        restaurants: state.RestaurantReducer.searchedRestaurants
    }
)

const dispatcherToPropertyMapper = dispatch => (
    {
        findAllRestaurants: () => {
            console.log('Circus');
            actions.findAllRestaurants(dispatch)
        }
    }
)

const SearchContainer =
    connect(
        stateToPropertyMapper,
        dispatcherToPropertyMapper)
    (SearchComponent)

export default SearchContainer;