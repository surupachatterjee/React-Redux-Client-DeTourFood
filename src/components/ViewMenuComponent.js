import React from 'react';
import history from '../History';

class ViewMenuComponent extends React.PureComponent {

    constructor(props) {
        super(props);
        this.guidGenerator = this.guidGenerator.bind(this);
        this.getTotalPrice = this.getTotalPrice.bind(this);
    }

    /*
    componentDidMount() {
        this.props.findRestaurantById(this.props.restaurantId);
        /!*if (this.props.restaurant) {
            this.props.findMenuById(this.props.restaurant.menu);
        }*!/
    }*/

    getTotalPrice(orderItems) {
        let total = 0;
        orderItems.map(orderItem => {
                if(orderItem.menuItemPrice)
                        total += Number(orderItem.menuItemPrice.replace(/[^0-9.-]+/g,""));
            });
        return total;
    }

    guidGenerator() {
        let S4 = function() {
            return (((1+Math.random())*0x10000)|0).toString(16).substring(1);
        };
        return (S4()+S4()+S4()+S4()+S4()+S4()+S4()+S4());
    }

    render() {
            return(
                <div className={"container card"}>
                    <h1>View Menu</h1>
                    <div>
                        <div className={"row"}>
                            <div className={"col-sm-8"}>
                                <h4>Cuisine: {this.props.cuisineName}</h4>
                            </div>
                            <div className={"col-sm-4"}>
                                <button className={"btn btn-outline-success"}
                                        onClick={() => {
                                            if(this.props.loggedIn) {
                                                    let totalPrice = this.getTotalPrice(this.props.orderItems);
                                                    let order = {
                                                            user: this.props.user,
                                                            status: 'INCOMPLETE',
                                                            totalPrice: totalPrice,
                                                            orderItems: this.props.orderItems
                                                    };
                                                    this.props.saveOrder(order);
                                                }
                                            else {
                                                    history.push('/login');
                                                }
                                        }}>
                                    Save Order
                                </button>
                            </div>
                        </div>
                        <br/>
                        <div className={"container"}>
                            <ul className={"list-group"}>
                                <li className={"list-group-item"}>
                                    <div className={"row"}>
                                        <div className={"col-sm-4"}>
                                            Menu Item
                                        </div>
                                        <div className={"col-sm-4"}>
                                            Price
                                        </div>
                                        <div className={"col-sm-4"}>
                                        </div>
                                    </div>
                                </li>
                                {this.props.menuItems &&
                                this.props.menuItems.split('\n').map((item, index) => {
                                    let menuItem = item.split('-')[0];
                                    let menuItemPrice = item.split('-')[1];
                                    if (item !== '') {
                                        return (
                                            <li className={"list-group-item"}
                                                key={index}>
                                            <div className={"row"}>
                                                <div className={"col-sm-4"}>
                                                    {menuItem}
                                                </div>
                                                <div className={"col-sm-4"}>
                                                    {menuItemPrice}
                                                </div>
                                                <div className={"col-sm-4"}>
                                                    <button className={"btn btn-outline-warning"}
                                                            onClick={() => {
                                                                if(this.props.loggedIn) {
                                                                        let orderItem = {
                                                                            itemId: this.guidGenerator(),
                                                                            restaurantId: this.props.restaurantId,
                                                                            menuItem: menuItem,
                                                                            menuItemPrice: menuItemPrice
                                                                        };
                                                                        this.props.addToOrder(orderItem);
                                                                    }
                                                                else {
                                                                        history.push('/login');
                                                                    }
                                                            }}>
                                                        Add to Order
                                                    </button>
                                                </div>
                                            </div>
                                            </li>
                                        )
                                    }
                                    })}
                                    </ul>
                        </div>
                    </div>
                </div>
                )
        }
    }


export default ViewMenuComponent;