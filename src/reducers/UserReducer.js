import * as constants from "../constants";

let initialState={
    user:{},
    loggedIn:false
};

const UserReducer = (state=initialState, action) => {
    console.log("Inside user reducer ");
    switch (action.type) {
        case constants.CREATE_USER:
            console.log("user from action" + action.user._id);
            return {
                ...state,
                user: action.user,
                loggedIn:true
            };
        case constants.USER_LOGIN:
            return{
                ...state,
                user:action.user,
                loggedIn:true
            };
        case constants.USER_LOGOUT:
            return{
                user:action.user,
                loggedIn:false
            }

        default: return state
    }
};

export default UserReducer;
