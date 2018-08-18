import {connect} from 'react-redux'
import * as actions from '../actions';
import RestaurantReducer from '../reducers/RestaurantReducer';
import RestaurantComponent from '../components/RestaurantComponent';

const stateToPropertyMapper = (state, ownProps) => {
    let id = ownProps.match.params.restaurantId;
    return {
        restaurantId: id,
        restaurants: state.RestaurantReducer.restaurants
    }
}


/*
const dispatcherToPropertyMapper = dispatch => (
    {
        searchRestaurants: city => actions.searchRestaurants(dispatch, city)
    }
)
*/

const RestaurantContainer =
    connect(
        stateToPropertyMapper,
        null)
    (RestaurantComponent)

export default RestaurantContainer;