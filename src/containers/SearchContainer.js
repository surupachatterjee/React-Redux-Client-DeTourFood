import {connect} from 'react-redux'
import * as actions from '../actions';
import SearchComponent from '../components/SearchComponent';
import RestaurantReducer from '../reducers/RestaurantReducer';

const stateToPropertyMapper = (state) => (
    {
        restaurants: state.RestaurantReducer.restaurants
    }
)

/*
const dispatcherToPropertyMapper = dispatch => (
    {
        searchRestaurants: city => actions.searchRestaurants(dispatch, city)
    }
)
*/

const SearchContainer =
    connect(
        stateToPropertyMapper,
        null)
    (SearchComponent)

export default SearchContainer;