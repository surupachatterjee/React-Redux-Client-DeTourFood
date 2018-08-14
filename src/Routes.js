import React,{Component} from 'react';
import {Route} from 'react-router-dom';
import HomeContainer from './containers/HomeContainer';
import NavBarContainer from './containers/NavBarContainer';
import SearchContainer from './containers/SearchContainer';
import PageNotFoundComponent from './components/PageNotFoundComponent';
import MenuContainer from './containers/MenuContainer';
import RestaurantContainer from './containers/RestaurantContainer';

export default class Routes extends Component{

    render() {
        return (
            <div>
                <NavBarContainer/>
                <Route exact path={"/"} component={HomeContainer}/>
                <Route exact path={"/home"} component={HomeContainer}/>
                <Route exact path={"/search"} component={SearchContainer}/>
                <Route exact path={"/restaurant/:restaurantId"} component={RestaurantContainer}/>
                {/*<Route path={"*"} component={PageNotFoundComponent}/>*/}
            </div>
        )
    }
};