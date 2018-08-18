import {connect} from 'react-redux';
import * as actions from '../actions/RestaurantActions';
import RegisterRestaurantComponent from '../components/RegisterRestaurantComponent'


/*const  stateToPropertyMapper = (state) =>{
    console.log("stateToPropertyMapper in login container" + state.user  + ": " + state.loggedIn);
    return({
            user:state.UserReducer.user,
            loggedIn:state.UserReducer.loggedIn
        }
    );
}*/

const dispatcherToPropertyMapper = dispatch => {
    console.log("Inside dispatcherToPropertyMapper of LoginContainer ");
    return(
        {
            /*login:user => actions.login(dispatch,user)*/
            createRestUser:user => actions.createRestUser(dispatch,user)

        }
    )
}


const RegisterRestaurantContainer =
    connect(
        null   ,
        dispatcherToPropertyMapper)
    (RegisterRestaurantComponent)

export default RegisterRestaurantContainer;