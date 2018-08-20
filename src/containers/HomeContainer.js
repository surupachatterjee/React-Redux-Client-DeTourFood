import React from 'react';
import {connect} from 'react-redux';
import HomeComponent from '../components/HomeComponent';
import * as actions from '../actions';

const dispatchToPropertyMapper = (dispatch) => {
    return {
        findAllRestaurants: () => actions.findAllRestaurants(dispatch),
        findAllUsers: () => actions.findAllUsers(dispatch)
    }
}
const stateToPropertyMapper = (state, ownProps) => {
    return {
        restaurants: state.RestaurantReducer.restaurants,
        users: state.UserReducer.users
    }
}

const HomeContainer =
    connect(
        stateToPropertyMapper,
        dispatchToPropertyMapper,
        )
    (HomeComponent)

export default HomeContainer;