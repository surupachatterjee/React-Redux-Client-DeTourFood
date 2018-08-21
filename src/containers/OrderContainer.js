import {connect} from 'react-redux'
import * as actions from '../actions';
import OrderComponent from '../components/OrderComponent'

const stateToPropertyMapper = (state) => (
    {
        order: state.OrderReducer.order,
        restaurants: state.RestaurantReducer.restaurants,
        user: state.UserReducer.user,
        loggedIn: state.UserReducer.loggedIn,
        orders: state.OrderReducer.orders
    }
)

const dispatcherToPropertyMapper = dispatch => (
    {
        completeOrder: (order) => actions.saveOrder(dispatch, order),
        findAllOrders: (orders) => actions.findAllOrders(dispatch, orders)
    }
)

const OrderContainer = connect(stateToPropertyMapper, dispatcherToPropertyMapper)(OrderComponent);

export default OrderContainer;