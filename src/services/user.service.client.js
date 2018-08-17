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
}

export default UserService;
