import React from 'react';

class SearchComponent extends React.PureComponent {

    render() {
        return (
            <div>
                {this.props.restaurants.map(restaurant => {
                    let imageUrl="https://picsum.photos/801/180?image=" + restaurant.id * 10
                    return (
                        <div className="card" key={restaurant.id}>
                            <div className="card-body">
                                <h4 className="card-title">Restaurant Name: {restaurant.name}</h4>
                            </div>
                            <img className="card-img-bottom" src={imageUrl} alt="Card image cap"/>
                        </div>
                    );
                })}
            </div>
        )
    }
}

export default SearchComponent;
