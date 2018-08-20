import React from 'react';
import history from '../History';

export default class OrderComponent extends React.PureComponent {

    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className={"container card"}>
                <div className={"container"}>
                    <div className={"row"}>
                        <h1>Current Order</h1>
                    </div>
                    <div className={"row"}>
                       {this.props.order &&
                       <h2>Status - {this.props.order.status}</h2>
                        }
                    </div>
                </div>
                {this.props.order &&
                <div className={"container"}>
                    <ul className={'list-group'}>
                        <div className={"row"}>
                            <div className={"col-sm-6"}>
                                Menu Item
                            </div>
                            <div className={"col-sm-6"}>
                                Amount
                            </div>
                        </div>
                        {this.props.order.orderItems &&
                        this.props.order.orderItems.map((orderItem, index) => (
                            <li className={"list-group-item"}
                                key={index}>
                                <div className={"row"}>
                                    <div className={"col-sm-6"}>
                                        {orderItem.menuItem}
                                    </div>
                                    <div className={"col-sm-6"}>
                                        {orderItem.menuItemPrice}
                                    </div>
                                </div>
                            </li>)
                        )}
                    </ul>
                </div>}
                <br/>
                {this.props.order &&
                <div className={"row"}>
                    <div className={"col-6"}>
                        <h3>Billing Amount: ${this.props.order.totalPrice}</h3>

                    </div>
                    <div className={"col-6"}>
                        <button className={"btn btn-outline-primary"}
                                onClick={() => {
                                    let order = this.props.order;
                                    order.status = 'COMPLETED'
                                        this.props.completeOrder(order)
                                    }}>
                            Complete Order
                        </button>
                    </div>
                </div>}
            </div>
        )
    }
}