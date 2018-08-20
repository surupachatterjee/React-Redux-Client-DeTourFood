import {connect} from 'react-redux';
import * as actions from '../actions/UserActions';
import UserProfileComponent from "../components/UserProfileComponent";


const  stateToPropertyMapper = (state) =>{
    console.log("inside usrr profile container " + state.UserReducer.user.username);
    return({
            user:state.UserReducer.user,
            loggedIn:state.UserReducer.loggedIn
        }
    );
}

const dispatcherToPropertyMapper = dispatch => {
    return(
        {
            updateUserProfile: (user,userId) => actions.updateUserProfile(dispatch,user,userId),
            updateAddress:(address,addressId) => actions.updateAddress(dispatch,address,addressId)
        }
    )
}

const UserProfileContainer =
    connect(
        stateToPropertyMapper,
        dispatcherToPropertyMapper)
    (UserProfileComponent)

export default UserProfileContainer;