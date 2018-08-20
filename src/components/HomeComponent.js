/*
import React from 'react';
import '../styles/HomeComponent.css';

class HomeComponent extends React.PureComponent {

    render() {
        return(
            <div className="form-group row">
                <div className="col-2"/>
                {!this.props.loggedIn &&
                <div className="registerBox col-6">
                    <br/>
                    <a className="btn btn-primary col-3"
                    href="/registerUser"><b>Sign Up As User</b></a>
                    <a className="btn btn-primary col-3"
                    href="/registerRestaurant"><b>Sign Up As Restaurant</b></a>
                </div>}
                <div className="col-2"/>
            </div>
        );
    }
}

export default HomeComponent;*/
import React from 'react';
import '../styles/HomeComponent.css';

class HomeComponent extends React.PureComponent {

    constructor(props) {
        super(props);
    }

    /*componentDidMount() {
        this.props.findAllRestaurants();
    }
*/
    render() {
        return(
            <div className="form-group row">
                <div className="col-2"/>
                <div className="registerBox col-6">
                    <br/>
                    <a className="btn btn-primary col-3"
                       href="/registerUser"><b>Sign Up As User</b></a>
                    <a className="btn btn-primary col-3"
                       href="/registerRestaurant"><b>Sign Up As Restaurant</b></a>
                </div>
                <div className="col-2"/>
            </div>
        );
    }
}

export default HomeComponent;