import * as constants from '../constants';
import swal from '../../node_modules/sweetalert';

let initialState = {
    order: '',
    orderItems: []
};

const OrderReducer = (state=initialState, action) => {
    switch (action.type) {
        case constants.ADD_TO_ORDER:
            swal("Added Item", "Item added Successfully", "success");
            return {
                orderItems: [...state.orderItems,
                        action.orderItem]
            };
        case constants.SAVE_ORDER:
            swal("Update Order", "Order Updated Successfully", "success");
            if(action.order.status === 'COMPLETED') {
                return {
                    orderItems: state.orderItems,
                    order: ''
                };
            } else {
                return {
                    orderItems: state.orderItems,
                    order: action.order
                };
            }

        default: return state

    }
}

export default OrderReducer;