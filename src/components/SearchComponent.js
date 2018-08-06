import React from 'react';

class SearchComponent extends React.PureComponent {

    render() {
        return (
            <div>
                <h1>Search Results</h1>
                {this.props.restaurants.restaurants && this.props.restaurants.restaurants.map(restaurant => {
                    console.log(restaurant);
                    return (
                        <div className="card" key={restaurant.restaurant.id}>
                            <div className="card-body" key={restaurant.restaurant.id}>
                                <h4 className="card-title">Restaurant Name: {restaurant.restaurant.name}</h4>
                                <h4 className="card-title">Cuisines: {restaurant.restaurant.cuisines}</h4>
                            </div>
                        </div>
                    );
                })}
            </div>
        )
    }
}

export default SearchComponent;
