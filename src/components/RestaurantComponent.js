import React from 'react';
import {Link} from 'react-router-dom';
import MenuContainer from "../containers/MenuContainer";
import "../styles/RestaurantComponent.css";

class RestaurantComponent extends React.PureComponent {

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.findRestaurantById(this.props.match.params.restaurantId);
        console.log(this.props.match.params.restaurantId);
    }

    render() {
        //alert(JSON.stringify(this.props.restaurant.zomatoRest));
        let restaurant, zomatoInfo, loc;
            if (this.props.restaurant) {
                restaurant = this.props.restaurant;
                zomatoInfo = restaurant.zomatoRest.restaurant;
                loc = zomatoInfo.location;
            }

        return (
            <div>
                {this.props.restaurant &&

                    <div  className={"container"} key={"restaurant.id"}>
                        <div className="card">
                            <img className="card-img-top"
                                 src={zomatoInfo.featured_image}
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
                                            {zomatoInfo.cuisines}
                                        </h6>
                                    </div>
                                    <div className={"col-sm-4"}>
                                        <h5>Average Cost for 2</h5>
                                        <h6 className="card-text">
                                            ${zomatoInfo.average_cost_for_two}
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
                        <MenuContainer restaurantId={restaurant._id}/>
                    </div>
                }
            </div>
        )
    }
}

export default RestaurantComponent;
