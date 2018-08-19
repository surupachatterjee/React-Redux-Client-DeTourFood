import React from 'react';

class OrderComponent extends React.PureComponent {

    render() {
        return (
            <div className={"container"}>
                <div className={"row"}>
                    <h1>Order</h1>
                </div>
                <div className={"row"}>
                    <div className={"col-sm-6"}>
                        Menu Items
                    </div>
                    <div className={"col-sm-6"}>
                        Amount
                    </div>
                </div>
                <div className={"row"}>
                    {this.props.order > 0 && this.props.order.map((menuitem, index) => (
                            <li className={"list-group-item"}
                                key={index}>
                                <div className={"col-sm-6"}>
                                    {order.menuitem}
                                </div>
                                <div className={"col-sm-6"}>
                                    {order.amount}
                                </div>
                            </li>
                        )
                    )}
                </div>
                <div className={"row"}>
                    <h3>Billing Amount:</h3>
                    {order.total}
                </div>
                <div className={"row"}>
                    <button className={"btn btn-outline-warning"}
                            onClick={}>
                        <PaymentGatewayComponent/>
                    </button>
                </div>
            </div>

        )
    }
}