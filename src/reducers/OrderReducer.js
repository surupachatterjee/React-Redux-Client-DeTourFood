import * as constants from '../constants';
import swal from '../../node_modules/sweetalert';

let initialState = {
    order: '',
    orderItems: [],
    orders: []
};

const OrderReducer = (state=initialState, action) => {
    switch (action.type) {
        case constants.FIND_ALL_ORDERS:
            return {
                orders: action.orders,
                orderItems: state.orderItems,
                order: state.order
            };
        case constants.ADD_TO_ORDER:
            swal("Added Item", "Item added Successfully", "success");
            return {
                orderItems: [...state.orderItems,
                        action.orderItem],
                order: state.order,
                orders: state.orders
            };
        case constants.SAVE_ORDER:
            swal("Update Order", "Order Updated Successfully", "success");
            if(action.order.status === 'COMPLETED') {
                return {
                    orderItems: state.orderItems,
                    order: '',
                    orders: state.orders
                };
            } else {
                return {
                    orderItems: state.orderItems,
                    order: action.order,
                    orders: state.orders
                };
            }

        default: return state

    }
}

export default OrderReducer;