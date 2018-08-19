import React from 'react';
import {connect} from 'react-redux';
import HomeComponent from '../components/HomeComponent';
import * as actions from '../actions';

const dispatchToPropertyMapper = (dispatch) => {
    return {
        findAllRestaurants: () => actions.findAllRestaurants(dispatch)
    }
}
const stateToPropertyMapper = (state, ownProps) => {
    return {

    }
}

const HomeContainer =
    connect(
        stateToPropertyMapper,
        dispatchToPropertyMapper,
        )
    (HomeComponent)

export default HomeContainer;