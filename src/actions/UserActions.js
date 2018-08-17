import history from '../History';
import * as constants from "../constants";
import UserService from  '../services/user.service.client';


let userService = UserService.instance;

export const createUser = (dispatch,user) => {
    userService.createUser(user)
        .then(user => {
            dispatch({
                type: constants.CREATE_USER,
                user: user
            })
        });
    history.push("/home");
}

export const login = (dispatch,user) =>{
    userService.login(user)
        .then(user => {
        dispatch({
            type:constants.USER_LOGIN,
            user:user
        })
    });
    history.push('/home');
}

export const logout =(dispatch) =>{
    userService.logout()
        .then(response => {
            dispatch({
                type:constants.USER_LOGOUT,
                user:{}
            })
        });
    history.push('/home');
}

export const visitProfile =() =>{
    history.push("/userProfile");

}


