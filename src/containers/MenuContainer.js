import React from 'react';
import {connect} from 'react-redux';
import ViewMenuComponent from '../components/ViewMenuComponent';
import ManageMenuComponent from "../components/ManageMenuComponent";
import * as actions from "../actions";

class MenuContainerHelper extends React.PureComponent {

    render() {
        return(
            <div>
                <ManageMenuComponent
                    updateRestaurantMenu={this.props.updateRestaurantMenu}
                    restaurant={this.props.restaurant}
                    restaurantId={this.props.restaurantId}
                />
                <ViewMenuComponent/>
            </div>
        )
    }
}

const stateToPropertyMapper = (state, ownProps) => {
    return {
        restaurantId: ownProps.restaurantId,
        restaurant: state.RestaurantReducer.restaurant
    }
}

const dispatcherToPropertyMapper = dispatch => {
    console.log("Inside dispatcherToPropertyMapper of MenuContainer ");
    return {
        updateRestaurantMenu: (menu, restaurantId) => actions.updateRestaurantMenu(dispatch, menu, restaurantId)
    }
}

const MenuContainer =
    connect(
        stateToPropertyMapper,
        dispatcherToPropertyMapper)
    (MenuContainerHelper)

export default MenuContainer;