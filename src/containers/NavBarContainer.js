import {connect} from 'react-redux'
import * as actions from '../actions';
import NavBarComponent from '../components/NavBarComponent';

/*const stateToPropertyMapper = (state, ownProps) => (
    {

    }
)*/

const dispatcherToPropertyMapper = dispatch => (
    {
        searchRestaurants: city => actions.searchRestaurants(dispatch, city)
    }
)

const NavBarContainer =
    connect(
        null,
        dispatcherToPropertyMapper)
    (NavBarComponent)

export default NavBarContainer;