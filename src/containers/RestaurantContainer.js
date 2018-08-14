import {connect} from 'react-redux'
import * as actions from '../actions';
import RestaurantReducer from '../reducers/RestaurantReducer';
import RestaurantComponent from '../components/RestaurantComponent';

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

const RestaurantContainer =
    connect(
        stateToPropertyMapper,
        null)
    (RestaurantComponent)

export default RestaurantContainer;