import React,{Component} from 'react';
import {Route} from 'react-router-dom';
import HomeContainer from './containers/HomeContainer';
import PageNotFoundComponent from './components/PageNotFoundComponent';

export default class Routes extends Component{

    render() {
        return (
            <div>
                <Route exact path={"/"} component={HomeContainer}/>
                <Route exact path={"/home"} component={HomeContainer}/>
                {/*<Route path={"*"} component={PageNotFoundComponent}/>*/}
            </div>
        )
    }
};