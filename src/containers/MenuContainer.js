import React from 'react';
import {connect} from 'react-redux';
import ViewMenuComponent from '../components/ViewMenuComponent';
import AddMenuComponent from "../components/AddMenuComponent";


class MenuContainerHelper extends React.PureComponent {

    render() {
        return(
            <div>
                <AddMenuComponent/>
                <ViewMenuComponent/>
            </div>
        )
    }
}

const stateToPropertyMapper = (state, ownProps) => {
    return {
        menus: state.MenuReducer.menus
    }
}

const MenuContainer =
    connect(
        stateToPropertyMapper,
        null)
    (MenuContainerHelper)

export default MenuContainer;