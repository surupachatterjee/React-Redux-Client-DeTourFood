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

export const createUserFromAdmin = (dispatch, newUser) => {
    userService.createUserFromAdmin(newUser)
        .then(users => {
            if (users[0].username === "Username Already Exists") {
                swal(users[0].username);
            }
            else {
                console.log(users.length);
                swal("User Created Successfully")
                dispatch({
                    type: constants.GET_ALL_USERS,
                    users: users
                });
            }
        });
}

export const fetchAllUsers = (dispatch) => {
    userService.fetchAllUsers()
        .then(users => {
            console.log("fetched users" + users)
            dispatch({
                type: constants.GET_ALL_USERS,
                users: users
            })
        });
}

export const deleteUser = (dispatch, userId) => {
    userService.deleteUser(userId)
        .then(() => {
            swal("User deleted successfully");
            dispatch({
                type: constants.DELETE_USER,
                userId: userId
            })
        })
}

export const updateEditableUser = (dispatch, userId) => {
    dispatch({
        type: constants.UPDATE_EDITABLE_USER,
        user: userId
    })
}

export const updateUserProfile = (dispatch, user, userId) => {
    userService.updateUserProfile(user, userId)
        .then(user => {
            console.log(user.username + " : " + user.phone + " : " + user.dateOfBirth);
            dispatch({
                type: constants.UPDATE_USER_PROFILE,
                user: user
            })
        })

}


export const updateUserFromAdmin = (dispatch, user, userId) => {
    userService.updateUserFromAdmin(user, userId)
        .then(user => {
            userService.fetchAllUsers()
                .then(users => {
                    dispatch({
                        type: constants.GET_ALL_USERS,
                        users: users
                    })
                });
        })
}

export const updateAddress = (dispatch, address, addressId) => {
    userService.updateAddress(address, addressId)
        .then(user => {
            console.log(user.username + " : " + user.phone + " : " + user.dateOfBirth);
            dispatch({
                type: constants.USER_ADDRESS_EDIT,
                user: user
            })
        })
}


export const updateAddressFromAdmin = (dispatch, address, addressId) => {
    userService.updateAddress(address, addressId)
        .then(user => {
            userService.fetchAllUsers()
                .then(users => {
                    dispatch({
                        type: constants.GET_ALL_USERS,
                        users: users
                    })
                });
        });

}

export const createUserAddress = (dispatch,addr, userId) => {
    userService.createUserAddress(addr, userId)
        .then(user => {
            userService.fetchAllUsers()
                .then(users => {
                    dispatch({
                        type: constants.GET_ALL_USERS,
                        users: users
                    })
                });
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


