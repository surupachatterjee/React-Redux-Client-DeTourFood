import * as constants from '../constants'
//const USER_URL ="http://localhost:4000/api/user";


let _singleton = Symbol();
class UserService {
    constructor(singletonToken) {
        if (_singleton !== singletonToken)
            throw new Error('Singleton!!!');
    }

    static get instance() {
        if (!this[_singleton])
            this[_singleton] = new UserService(_singleton);
        return this[_singleton]
    }

    createUser(user){
        return fetch(constants.USER_URL,{
            method:'post',
            body:JSON.stringify(user),
            headers:{
                'content-type':'application/json'
            }
        }).then(response => response.json());
    }

    createUserFromAdmin(newUser){
        return fetch(constants.ADMIN_USER_URL,{
            method:'post',
            body:JSON.stringify(newUser),
            headers:{
                'content-type':'application/json'
            }
        }).then(response => response.json());
    }

    login(user){
        return fetch(constants.LOGIN_URL,{
            method:'post',
            body:JSON.stringify(user),
            headers:{
                'content-type':'application/json'
            },
            credentials: 'include',
        }).then(response => response.json());
    }

    logout() {
        return fetch(constants.LOGOUT_URL, {
            method: 'post',
            credentials: 'include'
        });
    }

    fetchAllUsers(){
        return fetch(constants.USER_URL)
            .then(resp => resp.json())
    }


    deleteUser(userId){
        return fetch(constants.USER_URL + "/" + userId,{
            method:'delete'
        })
    }


    updateAddress(address,addressId){
        return fetch(constants.USER_URL + "/address/"+ addressId,{
            method:'put',
            body:JSON.stringify(address),
            headers:{
                'content-type':'application/json'
            },
            credentials:"include"
        }).then(response => response.json());
    }


    createUserAddress(addr, userId){
        return fetch(constants.USER_URL + "/" + userId + "/address",{
            method:'post',
            body:JSON.stringify(addr),
            headers:{
                'content-type':'application/json'
            },
            credentials:'include'
        }).then(response => response.json());
    }

    updateUserProfile(user,userId){
        return fetch(constants.USER_URL + "/" + userId,{
            method:'put',
            body:JSON.stringify(user),
            headers:{
                'content-type':'application/json'
            },
            credentials:'include'
        }).then(response =>response.json());
    }


    updateUserFromAdmin(user,userId){
        return this.updateUserProfile(user,userId);
    }

    /*findUserByUsername(username){
        return fetch(constants.USER_URL +"/" +username)
            .then(response => response.json());
    }*/

    findUserByUsername(username){
        return fetch(constants.USER_URL +"/"+username,{
            credentials: 'include',
            headers: {
                'content-type': 'application/json'
            }
        })
            .then(response =>response.json());
    }
}


export default UserService;
