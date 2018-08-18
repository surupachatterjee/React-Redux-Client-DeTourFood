import {connect} from 'react-redux';
import * as actions from '../actions/UserActions';
import AdminComponent from "../components/AdminComponent";


const  stateToPropertyMapper = (state) =>{
    console.log("stateToPropertyMapper in login container" + state.user  + ": " + state.loggedIn);
    return({
            user:state.UserReducer.user,
            loggedIn:state.UserReducer.loggedIn
        }
    );
}

const dispatcherToPropertyMapper = dispatch => {
    //console.log("Inside dispatcherToPropertyMapper of LoginContainer ");
    return(
        {
            /*login:user => actions.login(dispatch,user)*/

        }
    )
}


const AdminContainer =
    connect(
        stateToPropertyMapper   ,
        dispatcherToPropertyMapper)
    (AdminComponent)

export default AdminContainer;