import React,{Component} from 'react';
import {Route} from 'react-router-dom';
import HomeContainer from './containers/HomeContainer';
import NavBarContainer from './containers/NavBarContainer';
import SearchContainer from './containers/SearchContainer';
import PageNotFoundComponent from './components/PageNotFoundComponent';
import RegisterUserContainer from "./containers/RegisterUserContainer";
import UserProfileContainer from "./containers/UserProfileContainer";
import LoginComponent from "./components/LoginComponent";
import LoginContainer from "./containers/LoginContainer";

export default class Routes extends Component{

    render() {
        return (
            <div>
                <NavBarContainer/>
                <Route exact path={"/"} component={HomeContainer}/>
                <Route exact path={"/home"} component={HomeContainer}/>
                <Route exact path={"/search"} component={SearchContainer}/>
                <Route exact path={"/registerUser"} component={RegisterUserContainer}/>
                <Route exact path={"/userProfile"} component={UserProfileContainer}/>
                <Route exact path={"/login"} component={LoginContainer}/>
                {/*<Route path={"*"} component={PageNotFoundComponent}/>*/}
            </div>
        )
    }
};