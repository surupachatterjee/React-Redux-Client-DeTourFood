import * as constants from "../constants";
import UserService from "./user.service.client";

const ORDER_URL = 'https://detour-food-backend-stc.herokuapp.com/api/order';

let _singleton = Symbol();

class OrderService {

    constructor(singletonToken) {
        if (_singleton !== singletonToken)
            throw new Error('Singleton!!!');
    }

    static get instance() {
        if(!this[_singleton])
            this[_singleton] = new OrderService(_singleton);
        return this[_singleton]
    }

    findAllOrders() {
        return fetch(constants.ORDER_URL)
            .then(response => response.json());
    }
}

export default OrderService;
