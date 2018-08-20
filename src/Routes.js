import React,{Component} from 'react';
import {Route} from 'react-router-dom';
import HomeContainer from './containers/HomeContainer';
import NavBarContainer from './containers/NavBarContainer';
import SearchContainer from './containers/SearchContainer';
import PageNotFoundComponent from './components/PageNotFoundComponent';
import RegisterUserContainer from "./containers/RegisterUserContainer";
import UserProfileContainer from "./containers/UserProfileContainer";
import LoginContainer from "./containers/LoginContainer";
import RegisterRestaurantContainer from './containers/RegisterRestaurantContainer'
import AdminContainer from "./containers/AdminContainer";
import OrderContainer from './containers/OrderContainer';
import RestaurantContainer from './containers/RestaurantContainer';
import ProfileContainer from './containers/ProfileContainer';

export default class Routes extends Component{

    render() {
        return (
            <div>
                <NavBarContainer/>
                <Route exact path={"/"} component={HomeContainer}/>
                <Route exact path={"/home"} component={HomeContainer}/>
                <Route exact path={"/search"} component={SearchContainer}/>
                <Route exact path={"/registerUser"} component={RegisterUserContainer}/>
                <Route exact path={"/registerRestaurant"} component={RegisterRestaurantContainer}/>
                <Route exact path={"/userProfile"} component={UserProfileContainer}/>
                <Route exact path={"/login"} component={LoginContainer}/>
                <Route exact path={"/admin"} component={AdminContainer}/>
                <Route exact path={"/restaurant/:restaurantId"} component={RestaurantContainer}/>
                <Route exact path={"/orders"} component={OrderContainer}/>
                <Route exact path={"/profile"} component={ProfileContainer}/>
                {/*<Route path={"*"} component={PageNotFoundComponent}/>*/}
            </div>
        )
    }
};