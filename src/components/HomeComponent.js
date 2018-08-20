import React from 'react';
import '../styles/HomeComponent.css';
import {Link} from 'react-router-dom';

class HomeComponent extends React.PureComponent {

    constructor(props) {
        super(props);
        this.props.findAllRestaurants();
        this.props.findAllUsers();
    }

    render() {
        return(
            <div>
                <div className="form-group row">
                    <div className="col-1">
                    </div>
                    <div className="registerBox col-6 row">
                        <a className="btn btn-outline-light col-6"
                        href="/registerUser"><b>Sign Up As User</b></a>
                        <a className="btn btn-outline-light col-5"
                        href="/registerRestaurant"><b>Sign Up As Restaurant</b></a>
                    </div>
                    <div className="displayBox col-4">
                    <ul className={"list-group"}>
                        <li className={"list-group-item active"}>Some of our Restaurants</li>
                        {this.props.restaurants && this.props.restaurants.map((restaurant,index) => {
                            if(index<5) {
                                return(
                                    <li className={"list-group-item"}
                                        key={index}>
                                        <Link to={'restaurant/' + restaurant._id}>
                                            {restaurant.name}
                                        </Link>
                                    </li>)
                                }
                        })}
                    </ul>
                </div>
                </div>
            </div>
        );
    }
}

export default HomeComponent;