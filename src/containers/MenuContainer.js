import React from 'react';
import {connect} from 'react-redux';
import MenuComponent from '../components/MenuComponent';

const stateToPropertyMapper = (state, ownProps) => {
    return {
        menus: state.MenuReducer.menus
    }
}

const MenuContainer =
    connect(
        stateToPropertyMapper,
        null)
    (MenuComponent)

export default MenuContainer;