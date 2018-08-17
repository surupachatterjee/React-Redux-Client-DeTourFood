import {connect} from 'react-redux';
import * as actions from '../actions/UserActions';
import LoginComponent from '../components/LoginComponent'

const dispatcherToPropertyMapper = dispatch => {
    console.log("Inside dispatcherToPropertyMapper of LoginContainer ");
    return(
        {
            login:user => actions.login(dispatch,user)
        }
    )
}


const LoginContainer =
    connect(
        null,
        dispatcherToPropertyMapper)
    (LoginComponent)

export default LoginContainer;