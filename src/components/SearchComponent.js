import React from 'react';
import {Link} from 'react-router-dom';
import MenuContainer from '../containers/MenuContainer';

class SearchComponent extends React.PureComponent {

    constructor(props) {
        super(props);

    }

    componentDidMount() {
        this.props.findAllRestaurants();
    }

    render() {
        return (
            <div className={"container"}>
                <h3>Found {this.props.restaurants.length} Search Results</h3>
                <div className={"row"}>
                    {this.props.restaurants && this.props.restaurants.map(restaurant => {
                        let zomatoInfo = restaurant.zomatoRest.restaurant;
                        return (
                            <div className={"col-6"} key={restaurant._id}>
                            <div className="card">
                                <img className="card-img-top" src={zomatoInfo.featured_image} alt="Card image cap"/>
                                    <div className="card-body">
                                        <h4 className="card-title">{restaurant.name}</h4>
                                        <h5 className="card-text"> Cuisines: {zomatoInfo.cuisines} </h5>
                                        <Link to={`/restaurant/${restaurant._id}`}>
                                            <button className="btn btn-outline-warning btn-block" type={"button"}>
                                                Order Now
                                            </button>
                                        </Link>
                                    </div>
                            </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        )
    }
}

export default SearchComponent;
