import * as constants from "../constants";
import swal from '../../node_modules/sweetalert'

let initialState = {
    user: {},
    loggedIn: false
};

const UserReducer = (state = initialState, action) => {
    console.log("Inside user reducer ");
    switch (action.type) {
        case constants.CREATE_USER:
            console.log("user from action" + action.user._id);
            return {
                ...state,
                user: action.user,
                loggedIn: true
            };
        case constants.USER_LOGIN:
            if (action.user.username !== "Invalid credentials") {
                swal("Success!!!", "Logged In Successfully", "success");
                return {
                    ...state,
                    user: action.user,
                    loggedIn: true
                }
            } else {
                swal("Login Error!!!", "Invalid Credentials", "error");
                return {
                    ...state,
                    user: {},
                    loggedIn: false
                }
            }
            ;
        case constants.USER_LOGOUT:
            swal("Logout", "Logged Out Successfully", "success");
            return {
                user: action.user,
                loggedIn: false
            };
        case constants.USER_ADDRESS_EDIT:
            return{
                ...state,
                user:action.user
            }
        case constants.FIND_USER_BY_USERNAME:
            return {
                ...state,
                user: action.user

            }

        case constants.UPDATE_USER_PROFILE:
            console.log(action.user.username+ " : " + action.user.phone + " : " + action.user.dateOfBirth);
            console.log(state.user.username+ " : " + state.user.phone + " : " + state.user.dateOfBirth);
            return{
                ...state,
                user:action.user,

            }

        default:
            return state
    }
};

export default UserReducer;
