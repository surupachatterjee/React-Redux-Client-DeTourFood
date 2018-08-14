import React from 'react';
import {Link} from 'react-router-dom';
import MenuContainer from "../containers/MenuContainer";

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
                            <div className={"container"} key={"restaurant.id"}>
                                <div className={"row"}>
                                    <div className={"col-sm-5"}>
                                        <h3>{restaurant.name}</h3>
                                        <img src={restaurant.featured_image}/>
                                        <h5>Cuisines: {restaurant.cuisines}</h5>
                                        <h5>Average Cost for Two: {restaurant.average_cost_for_two}</h5>
                                        <h5>Location</h5>
                                        <h6>{loc.address}</h6>
                                    </div>
                                    <div className={"col-sm-7"}>
                                        <MenuContainer restaurantId={restaurant.id}/>
                                    </div>
                                </div>
                            </div>
                        );
                    }
                })}
            </div>
        )
    }
}

export default RestaurantComponent;
