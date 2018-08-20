import * as constants from '../constants';

let initialState = {
    orderItems: []
};

const OrderReducer = (state=initialState, action) => {
    switch (action.type) {
        case constants.ADD_TO_ORDER:
            alert(JSON.stringify(state.orderItems));
            return {
                orderItems: [...state.orderItems,
                        action.orderItem]
            };

        default: return state

    }
}

export default OrderReducer;