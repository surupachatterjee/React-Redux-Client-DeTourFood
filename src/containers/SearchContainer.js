import {connect} from 'react-redux'
import * as actions from '../actions';
import SearchComponent from '../components/SearchComponent';
import RestaurantReducer from '../reducers/RestaurantReducer';

const stateToPropertyMapper = (state, ownProps) => (
    {
        restaurants: state.RestaurantReducer.restaurants
    }
)

/*
const dispatcherToPropertyMapper = dispatch => (
    {
        findLocationDetailsByCity: city => actions.findLocationDetailsByCity(dispatch, city)
    }
)
*/

const SearchContainer =
    connect(
        stateToPropertyMapper,
        null)
    (SearchComponent)

export default SearchContainer;