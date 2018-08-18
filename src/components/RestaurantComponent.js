import React from 'react';
import {Link} from 'react-router-dom';
import MenuContainer from "../containers/MenuContainer";
import "../styles/RestaurantComponent.css";

class RestaurantComponent extends React.PureComponent {

    render() {

        return (
            <div>
                {this.props.restaurants && this.props.restaurants.map(obj => {
                    let restaurant = obj.restaurant;
                    if (this.props.restaurantId === restaurant.id)
                    {
                        let loc = restaurant.location;
                        return (
                            <div  className={"container"} key={"restaurant.id"}>
                                <div className="card">
                                    <img className="card-img-top"
                                         src={restaurant.featured_image}
                                         alt="Card image cap"
                                         id={"restaurantImg"}/>
                                    <div className="card-body">
                                        <h2 className="card-title">
                                            {restaurant.name}
                                        </h2>
                                        <div className={"row"}>
                                            <div className={"col-sm-4"}>
                                                <h5>Cuisines</h5>
                                                <h6 className="card-text">
                                                    {restaurant.cuisines}
                                                </h6>
                                            </div>
                                            <div className={"col-sm-4"}>
                                                <h5>Average Cost for 2</h5>
                                                <h6 className="card-text">
                                                    ${restaurant.average_cost_for_two}
                                                </h6>
                                            </div>
                                            <div className={"col-sm-4"}>
                                                <h5>Address</h5>
                                                <h6 className="card-text">
                                                    {loc.address}
                                                </h6>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <MenuContainer restaurantId={restaurant.id}/>
                            </div>
                        );
                    }
                })}
            </div>
        )
    }
}

export default RestaurantComponent;
