import React from 'react';
import {connect} from 'react-redux';
import ViewMenuComponent from '../components/ViewMenuComponent';
import ManageMenuComponent from "../components/ManageMenuComponent";
import * as actions from "../actions";

class MenuContainerHelper extends React.PureComponent {
    constructor(props) {
        super(props);
        this.updateMenu = this.updateMenu.bind(this);
    }

    componentDidMount() {
        this.props.findRestaurantById(this.props.restaurantId);
        /*if (this.props.restaurant) {
            this.props.findMenuById(this.props.restaurant.menu);
        }*/
    }

    updateMenu() {
        let menu = {
            name: this.props.name,
            cuisineName: this.props.cuisineName,
            menuItems: this.props.menuItems
        }
        if (this.props.menu) {
            this.props.updateRestaurantMenu(this.props.menu._id, menu);
        }
    }

    render() {
        return(
            <div>
                <ManageMenuComponent
                    updateRestaurantMenu={this.props.updateRestaurantMenu}
                    findRestaurantById={this.props.findRestaurantById}
                    restaurant={this.props.restaurant}
                    restaurantId={this.props.restaurantId}
                    menu={this.props.menu}
                    findMenuById={this.props.findMenuById}
                    changeMenuName = {this.props.changeMenuName}
                    changeMenuCuisine = {this.props.changeMenuCuisine}
                    changeMenuItems = {this.props.changeMenuItems}
                    name = {this.props.name}
                    cuisineName = {this.props.cuisineName}
                    menuItems = {this.props.menuItems}
                    updateMenu = {this.updateMenu}
                />
                <ViewMenuComponent
                    name = {this.props.name}
                    cuisineName = {this.props.cuisineName}
                    menuItems = {this.props.menuItems}
                    restaurantId={this.props.restaurantId}
                    restaurant={this.props.restaurant}
                    findRestaurantById={this.props.findRestaurantById}
                    menu={this.props.menu}
                    addToOrder = {this.props.addToOrder}
                    order = {this.props.order}
                />
            </div>
        )
    }
}

const stateToPropertyMapper = (state, ownProps) => {
    return {
        restaurantId: ownProps.restaurantId,
        restaurant: state.RestaurantReducer.restaurant,
        menu: state.MenuReducer.menu,
        name: state.MenuReducer.name,
        cuisineName: state.MenuReducer.cuisineName,
        menuItems: state.MenuReducer.menuItems,
        order: state.OrderReducer.order
    }
}

const dispatcherToPropertyMapper = dispatch => {
    console.log("Inside dispatcherToPropertyMapper of MenuContainer ");
    return {
        updateRestaurantMenu: (menuId, menu) => actions.updateRestaurantMenu(dispatch, menuId, menu),
        findRestaurantById: (restaurantId) => actions.findRestaurantById(dispatch, restaurantId),
        findMenuById: (menuId) => actions.findMenuById(dispatch, menuId),
        changeMenuName: (name) => actions.changeMenuName(dispatch, name),
        changeMenuCuisine: (cuisineName) => actions.changeMenuCuisine(dispatch, cuisineName),
        changeMenuItems: (menuItems) => actions.changeMenuItems(dispatch, menuItems),
        addToOrder: (orderItem) => actions.addToOrder(dispatch, orderItem)
    }
}

const MenuContainer =
    connect(
        stateToPropertyMapper,
        dispatcherToPropertyMapper)
    (MenuContainerHelper)

export default MenuContainer;