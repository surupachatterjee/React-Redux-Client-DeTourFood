import {connect} from 'react-redux'
import * as actions from '../actions';
import * as userAction from '../actions/UserActions'
import NavBarComponent from '../components/NavBarComponent';


const  stateToPropertyMapper = (state) =>{
    console.log("stateToPropertyMapper in user" + state.user);
    return({
            user:state.UserReducer.user,
            loggedIn:state.UserReducer.loggedIn
        }
    );
}

const dispatcherToPropertyMapper = dispatch => (
    {
        findLocationDetailsByCity: city => actions.findLocationDetailsByCity(dispatch, city),
        visitProfile:() => userAction.visitProfile(),
        visitAdminPage:()=>userAction.visitAdminPage(),
        logout:() => userAction.logout(dispatch),
        searchRestaurants: city => actions.searchRestaurants(dispatch, city)
    }
)

const NavBarContainer =
    connect(
        stateToPropertyMapper,
        dispatcherToPropertyMapper)
    (NavBarComponent)

export default NavBarContainer;