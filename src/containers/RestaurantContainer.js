import {connect} from 'react-redux'
import * as actions from '../actions';
import RestaurantReducer from '../reducers/RestaurantReducer';
import RestaurantComponent from '../components/RestaurantComponent';

const stateToPropertyMapper = (state) => {
    return {
        restaurant: state.RestaurantReducer.selectedRestaurant
    }
}

const dispatcherToPropertyMapper = dispatch => (
{
    findRestaurantById: id => actions.findRestaurantById(dispatch, id)
}
)

const RestaurantContainer =
    connect(
        stateToPropertyMapper,
        dispatcherToPropertyMapper)
    (RestaurantComponent)

export default RestaurantContainer;