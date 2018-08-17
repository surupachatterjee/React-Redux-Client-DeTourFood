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

/*const dispatcherToPropertyMapper = dispatch => {
    return(
        {

        }
    )
}*/

const UserProfileContainer =
    connect(
        stateToPropertyMapper,
        null)
    (UserProfileComponent)

export default UserProfileContainer;