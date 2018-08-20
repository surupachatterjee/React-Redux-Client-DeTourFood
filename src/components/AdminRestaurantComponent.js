import React from 'react';
import swal from '../../node_modules/sweetalert'
import * as constants from "../constants";




class AdminRestaurantComponent extends React.PureComponent {
    constructor(props) {
        super(props)
    };

    render() {
        return (
            <div>
                <h4>AdminRestaurantComponent {this.props.restaurants.length}</h4>
            </div>
        )
    }
}


export default AdminRestaurantComponent;
