import React from 'react';
import swal from '../../node_modules/sweetalert'
import * as constants from "../constants";



class AdminComponent extends React.PureComponent {
    render(){
        return(
            <div>
                {/*<h2>Admin Page</h2>*/}
                <div className="form-group row">
                    <div className="col-sm-3 leftbar">
                        {/*<h2 style={{"color": "white"}}>Your Profile </h2>*/}
                        <ul className="list-group">
                            <li><a href="#"
                                   onClick={(event) => this.activeSection = constants.ADMIN_RESTAURANT_VIEW}
                            >Restaurants</a></li>
                            <li><a href="#">Users</a></li>
                            <li><a href="#">Addresses</a></li>
                        </ul>
                    </div>
                    <div className="col-sm-1"/>
                    <div className="col-sm-6 rightbar">
                        <div className="col-sm-6 rightbar">
                            {this.activeSection === constants.ADMIN_RESTAURANT_VIEW &&
                            <div>

                            </div>
                            }
                        </div>
                    </div>
                    <div className="col-sm-2"/>
                </div>
            </div>

        )
    }

}

export default AdminComponent;