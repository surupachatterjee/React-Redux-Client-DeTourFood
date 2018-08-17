import {connect} from 'react-redux';
import * as actions from '../actions/UserActions';
import RegisterUserComponent from "../components/RegisterUserComponent";

/*
const  stateToPropertyMapper = (state) =>{
    return({
            user:state.user,
            loggedIn:state.loggedIn
        }
    );
}
*/

const dispatcherToPropertyMapper = dispatch => {
    console.log("Inside dispatcherToPropertyMapper of RegisterUserContainer ");
    return(
        {
            createUser: user => actions.createUser(dispatch, user)
        }
    )
}

const RegisterUserContainer =
    connect(
        null,
        dispatcherToPropertyMapper)
    (RegisterUserComponent)

export default RegisterUserContainer;