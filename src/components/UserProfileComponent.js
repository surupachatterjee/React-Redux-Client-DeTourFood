import React from 'react';
import '../styles/UserProfile.css'
import * as constants from "../constants";

class UserProfileComponent extends React.PureComponent {

    render() {
        let username;
        let firstName;
        let lastName;
        let email;
        let phone;
        let dateOfBirth;
        let activeSection = constants.USER_PROFILE_DETAILS;

        return (
            <div>
                <div className="form-group row">
                    <div className="col-sm-3 leftbar">
                        <h2 style={{"color": "white"}}>Your Profile </h2>
                        <ul className="list-group">
                            <li><a href="#"
                                   onClick={(event) => this.activeSection = constants.USER_PROFILE_DETAILS}>
                                User Details</a></li>
                            <li><a href="#"
                                   onClick={(event) => this.activeSection = constants.USER_PROFILE_ADDRESSES}>
                                Addresses</a></li>
                            <li><a href="#">Orders</a></li>
                            <li><a href="#">Restaurants</a></li>
                            <li><a href="#">Payments</a></li>
                        </ul>
                    </div>
                    <div className="col-sm-1"/>
                    <div className="col-sm-6 rightbar">
                        {this.activeSection === constants.USER_PROFILE_DETAILS &&
                        <div id="basicDetails">
                            <br/>
                            <h4>User Details</h4><br/>
                            <div className="form-group row">
                                <label htmlFor="usernameFld" className="col-sm-2 col-form-label">
                                    Username
                                </label>
                                <div className="col-sm-10">
                                    <input id="usernameFld"
                                           defaultValue={this.props.user.username}
                                           disabled="true"
                                           ref={node => this.username = node}
                                           placeholder="alice.smith"
                                           className="form-control"/>
                                </div>
                            </div>

                            <div className="form-group row">
                                <label htmlFor="firstName" className="col-sm-2 col-form-label">
                                    FirstName
                                </label>
                                <div className="col-sm-10">
                                    <input id="firstName"
                                           defaultValue={this.props.user.firstName}
                                           ref={node => this.firstName = node}
                                           placeholder="Alice"
                                           className="form-control"/>
                                </div>
                            </div>

                            <div className="form-group row">
                                <label htmlFor="lastName" className="col-sm-2 col-form-label">
                                    LastName
                                </label>
                                <div className="col-sm-10">
                                    <input id="lastName"
                                           defaultValue={this.props.user.lastName}
                                           ref={node => this.lastName = node}
                                           placeholder="Smith"
                                           className="form-control"/>
                                </div>
                            </div>

                            <div className="form-group row">
                                <label htmlFor="email" className="col-sm-2 col-form-label">
                                    Email
                                </label>
                                <div className="col-sm-10">
                                    <input id="email"
                                           defaultValue={this.props.user.email}
                                           ref={node => this.email = node}
                                           placeholder="smith.alice@example.com"
                                           className="form-control"/>
                                </div>
                            </div>

                            <div className="form-group row">
                                <label htmlFor="phone" className="col-sm-2 col-form-label">
                                    Phone
                                </label>
                                <div className="col-sm-10">
                                    <input id="phone"
                                           defaultValue={this.props.user.phone}
                                           ref={node => this.phone = node}
                                           placeholder="(123)-456-7890"
                                           className="form-control"/>
                                </div>
                            </div>

                            <div className="form-group row">
                                <label htmlFor="dateOfBirth" className="col-sm-2 col-form-label">
                                    Date Of Birth
                                </label>
                                <div className="col-sm-10">
                                    <input id="dateOfBirth"
                                           defaultValue={this.props.user.dateOfBirth}
                                           ref={node => this.dateOfBirth = node}
                                           placeholder="MM/DD/YYYY"
                                           className="form-control"/>
                                </div>
                            </div>

                            <div className="form-group row">
                                <div className="col-sm-2"/>
                                <div className="col-sm-10">
                                    <button id="updateProfile"
                                            onClick={() =>{
                                                let user = this.props.user;
                                                user = {...user,
                                                firstName:this.firstName.value,
                                                lastName:this.lastName.value,
                                                email:this.email.value,
                                                phone:this.phone.value,
                                                dateOfBirth:this.dateOfBirth.value,
                                                role:'CUSTOMER'};

                                               // updateUserProfile()
                                                }}
                                           className="form-control btn btn-success">
                                        Update Profile
                                    </button>
                                </div>
                            </div>

                        </div>
                        }
                        {this.activeSection === constants.USER_PROFILE_ADDRESSES &&
                        <div className="form-group row" id="addresses">

                            <div className="col-sm-10">
                                <br/>
                                <h4>Addresses</h4><br/>
                                <ul className="list-group">
                                    <li className="list-group-item">
                                        Address 1
                                        <button className="button"><span>Edit</span></button>
                                    </li>
                                    <li className="list-group-item">
                                        Address 2
                                        <button className="button"><span>Edit</span></button>
                                    </li>
                                    <li className="list-group-item">
                                        Address 3
                                        <button className="button"><span>Edit</span></button>
                                    </li>
                                </ul>
                            </div>
                        </div>}

                    </div>
                    <div className="col-sm-2"/>
                </div>


            </div>
        )
    }
}

export default UserProfileComponent;