import React from 'react';
import history from '../History';

class ViewMenuComponent extends React.PureComponent {

    /*constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.findRestaurantById(this.props.restaurantId);
        /!*if (this.props.restaurant) {
            this.props.findMenuById(this.props.restaurant.menu);
        }*!/
    }*/

    render() {
            return(
                <div className={"container card"}>
                    <h1>View Menu</h1>
                    <div>
                        <h4>Cuisine: {this.props.cuisineName}</h4>
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
                                } else {

                                }
                            })}
                        </ul>
                    </div>
                </div>
                )
        }
    }


export default ViewMenuComponent;