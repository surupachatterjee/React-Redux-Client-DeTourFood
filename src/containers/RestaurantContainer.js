import {connect} from 'react-redux'
import * as actions from '../actions';
import RestaurantReducer from '../reducers/RestaurantReducer';
import RestaurantComponent from '../components/RestaurantComponent';

const stateToPropertyMapper = (state, ownProps) => {
    let id = ownProps.match.params.restaurantId;
    return {
        restaurantId: id,
        restaurants: state.RestaurantReducer.restaurants
        /*restaurantObj: state.RestaurantReducer.restaurants.filter((obj) => {
            console.log(obj.restaurant);
            console.log(obj.restaurant.id === id);
            if(obj.restaurant.id === id) {
                return true;
            }
            return false;
        })*/
    }
}



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