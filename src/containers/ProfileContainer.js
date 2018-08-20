import {connect} from 'react-redux';
import * as actions from '../actions/UserActions';
import ProfileComponent from "../components/ProfileComponent";

const  stateToPropertyMapper = (state) =>{
    console.log("stateToPropertyMapper in login container" + state.user  + ": " + state.loggedIn);
    return({
            fetchedUserProfile : state.UserReducer.fetchedUserProfile
        }
    );
}

const dispatcherToPropertyMapper = dispatch => {
    console.log("Inside dispatcherToPropertyMapper of LoginContainer ");
    return(
        {


        }
    )
}

const ProfileContainer =
    connect(
        stateToPropertyMapper   ,
        dispatcherToPropertyMapper)
    (ProfileComponent)

export default ProfileContainer;