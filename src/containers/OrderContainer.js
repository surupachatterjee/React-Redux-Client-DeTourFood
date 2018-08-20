import {connect} from 'react-redux'
import * as actions from '../actions';
import OrderComponent from '../components/OrderComponent'

const stateToPropertyMapper = (state) => (
    {
        order: state.OrderReducer.order,
        restaurants: state.RestaurantReducer.restaurants
    }
)

const dispatcherToPropertyMapper = dispatch => (
    {
        completeOrder: (order) => actions.saveOrder(dispatch, order)
    }
)

const OrderContainer = connect(stateToPropertyMapper, dispatcherToPropertyMapper)(OrderComponent);

export default OrderContainer;