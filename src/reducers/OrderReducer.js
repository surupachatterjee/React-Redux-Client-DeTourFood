import * as constants from '../constants';

let initialState = {
    order: []
};

const OrderReducer = (state=initialState, action) => {
    switch (action.type) {
        case constants.ADD_TO_ORDER:
            return {
                order: [...state.order,
                        action.orderItem]
            };

        default: return state

    }
}

export default OrderReducer;