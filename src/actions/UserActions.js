import history from '../History';
import * as constants from "../constants";
import UserService from '../services/user.service.client';
import swal from '../../node_modules/sweetalert'

let userService = UserService.instance;

export const createUser = (dispatch, user) => {
    userService.createUser(user)
        .then(user => {
            if (user.username === "Username Already Exists") {
                swal(user.username);
                history.push("/registerUser");
            }
            else {
                dispatch({
                    type: constants.CREATE_USER,
                    user: user
                });
                history.push("/home");
            }
        });

}

export const login = (dispatch, user) => {
    userService.login(user)
        .then(user => {

            dispatch({
                type: constants.USER_LOGIN,
                user: user
            })
        });
    history.push('/home');
}

export const logout = (dispatch) => {
    userService.logout()
        .then(response => {
            dispatch({
                type: constants.USER_LOGOUT,
                user: {}
            })
        });
    history.push('/home');
}

export const findUserByUsername = (dispatch, username) => {
    userService.findUserByUsername(username)
        .then(user => {
            dispatch({
                type: constants.FIND_USER_BY_USERNAME,
                user: user
            })
        })
}

export const visitProfile = () => {
    history.push("/userProfile");

}

export const visitAdminPage = () => {
    history.push("/admin");
}


