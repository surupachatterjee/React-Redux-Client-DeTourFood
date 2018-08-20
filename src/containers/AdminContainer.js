import {connect} from 'react-redux';
import * as actions from '../actions/UserActions';
import AdminComponent from "../components/AdminComponent";
import * as restActions from "../actions/RestaurantActions"


const  stateToPropertyMapper = (state) =>{
    console.log("stateToPropertyMapper in login container" + state.user  + ": " + state.loggedIn);
    return({
            user:state.UserReducer.user,
            loggedIn:state.UserReducer.loggedIn,
            users:state.AdminReducer.users,
            restaurants:state.AdminReducer.restaurants,
            editableUser:state.AdminReducer.editableUser
        }
    );
}

const dispatcherToPropertyMapper = dispatch => {
    return(
        {
            fetchAllRestaurantDetails:() => restActions.fetchAllRestaurantDetails(dispatch),
            fetchAllUsers:()=> actions.fetchAllUsers(dispatch),
            changeStatus: (restId,status) => restActions.changeStatus(dispatch,restId,status),
            deleteUser:userId => actions.deleteUser(dispatch,userId),
            updateEditableUser:userId => actions.updateEditableUser(dispatch,userId),
            updateUserProfile:(user, userId)  => actions.updateUserFromAdmin(dispatch,user,userId),
            updateAddress:(address,addressId) => actions.updateAddressFromAdmin(dispatch,address,addressId),
            createUserFromAdmin:(newUser) => actions.createUserFromAdmin(dispatch,newUser),
            createUserAddress:(addr, userId) => actions.createUserAddress(dispatch,addr, userId)
        }
    )
}


const AdminContainer =
    connect(
        stateToPropertyMapper   ,
        dispatcherToPropertyMapper)
    (AdminComponent)

export default AdminContainer;