import React from 'react';
import swal from '../../node_modules/sweetalert'
import * as constants from "../constants";
import '../styles/AdminComponent.css'
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'


class AdminComponent extends React.PureComponent {

    /*constructor(props){
        super(props)
        /!*this.props.fetchAllRestaurantDetails();
        //this.props.fetchAllUsers();*!/
    }*/

    activeSection = '';
    restaurantStsSec = '';
    userDetailSec = '';


    render() {
        return (
            <div>
                {/*<h2>Admin Page</h2>*/}
                <div className="form-group row">
                    <div className="col-sm-2 leftbar">
                        {/*<h2 style={{"color": "white"}}>Your Profile </h2>*/}
                        <ul className="list-group">
                            <li><a href="#"
                                   onClick={(event) => this.getAllRestaurants()}
                            >Restaurants</a></li>
                            <li><a href="#"
                                   onClick={(event) => this.getAllUsers()}
                            >Users</a></li>
                            {/*<li><a href="#">Addresses</a></li>*/}
                        </ul>
                    </div>
                    {/*<div className="col-sm-1"/>*/}
                    <div className="col-sm-9 rightbar">
                        <div className="rightbar">
                            {this.activeSection === constants.ADMIN_RESTAURANT_VIEW &&
                            <div>{this.renderRestaurants()}</div>}
                            {this.activeSection === constants.ADMIN_USER_VIEW &&
                            <div>{this.renderUsers()}</div>}
                            {this.activeSection === constants.ADMIN_USER_EDIT &&
                            <div>{this.renderForm()}</div>
                            }
                        </div>
                    </div>
                    {/*<div className="col-sm-2"/>*/}
                </div>
            </div>

        )
    }

    getAllRestaurants() {
        this.props.fetchAllRestaurantDetails();
        this.activeSection = constants.ADMIN_RESTAURANT_VIEW;
    }


    getAllUsers() {
        this.props.fetchAllUsers();
        this.activeSection = constants.ADMIN_USER_VIEW;
    }

    renderUsers() {
        let username;
        let password;
        let verifyPassword;

        return (
            <div>
                <div>
                    <h2>Create User</h2>
                    <ul className="list-group">
                        <li className="list-group-item">
                            <form className="form-inline my-2 my-lg-0">
                                <input className="form-control mr-sm-2 input-lg"
                                       placeholder="username"
                                       aria-label="username"
                                       ref={node => username = node}
                                />
                                <input className="form-control mr-sm-2 input-lg"
                                       placeholder="password"
                                       type="password"
                                       aria-label="password"
                                       ref={node => password = node}
                                />
                                <input className="form-control mr-sm-2 input-lg"
                                       placeholder="confirm password"
                                       type="password"
                                       aria-label="confirm password"
                                       ref={node => verifyPassword = node}
                                />
                                <button
                                    onClick={() => this.createUser(username.value, password.value, verifyPassword.value)}
                                    className="btn btn-outline-success float-right"
                                    type="button">
                                    Create User
                                </button>
                            </form>
                            {/*<button className="btn btn-warning float-right" onClick={(event) => {
                            }}>Create User
                            </button>*/}
                        </li>
                    </ul>
                </div>
                <div>
                    <h2>List of Users</h2>
                    {this.renderUser()}
                </div>
            </div>)
    }

    createUser(username, password, verifyPass) {
        let newUser = {
            username: username,
            password: password,
            role: "CUSTOMER",
            creationDate: new Date(),
            userStatus: 'ACTIVE'
        };
        if (newUser.username === '') {
            swal("Register Error", "Enter username", "error");
        } else if (newUser.password === '') {
            swal("Register Error", "Enter password", "error");
        } else if (verifyPass === '') {
            swal("Register Error", "Re-Enter password to verify ", "error");
        } else {
            if (newUser.password === verifyPass) {
                console.log('User Name' + newUser.username);
                this.props.createUserFromAdmin(newUser);
            }
            else
                swal("Register Error", "Passwords Don't Match ", "error");
        }
    }


    renderForm() {
        console.log("inside render form")
        let editUser = this.props.users.filter(user => user._id === this.props.editableUser);
        let emptyAddressJSON = {
            addressName: '',
            address: '',
            city: '',
            zipcode: '',
            state: '',
            country: ''
        };
        let userFormHTML =
            <div>
                <h4>Update User: {this.props.editableUser}: {editUser[0].username}</h4>
                <h4><a href="#" onClick={(event) => this.userDetailSec = 'BASIC_USER_DETAILS'}>Edit Basic User
                    Details</a></h4>
                {this.userDetailSec === 'BASIC_USER_DETAILS' &&
                <div>{this.userForm(editUser[0])}</div>}
                <h4><a href="#" onClick={(event) => this.userDetailSec = 'USER_ADDRESSES'}>Users Addresses</a></h4>
                {this.userDetailSec === 'USER_ADDRESSES' &&
                <div>{this.userAddressFormHTML(editUser[0])}</div>}
                <h4><a href="#" onClick={(event) => this.userDetailSec = 'USER_ADDRESS_CREATE'}>Create User Address</a>
                </h4>
                {this.userDetailSec === 'USER_ADDRESS_CREATE' &&
                <div>{this.userAddressFormHTML({_id: this.props.editableUser, addresses: [emptyAddressJSON]})}</div>}
            </div>
        ;
        return userFormHTML;
    }

    userAddressFormHTML(editUser) {
        let addresses = editUser.addresses.map(address => {
            return (
                <li className='list-group-item' key={address._id}>
                    <input className="form-control" placeholder="Address Name" defaultValue={address.addressName}
                           ref={node => this.addressName = node}/>
                    <input className="form-control" placeholder="Address Line" defaultValue={address.address} ref={node => this.address = node}/>
                    <input className="form-control" placeholder="City" defaultValue={address.city} ref={node => this.city = node}/>
                    <input className="form-control" placeholder="Zip Code" defaultValue={address.zipcode} ref={node => this.zipcode = node}/>
                    <input className="form-control" placeholder="State" defaultValue={address.state} ref={node => this.state = node}/>
                    <input className="form-control" placeholder="Country" defaultValue={address.country} ref={node => this.country = node}/>
                    {address._id !== undefined &&
                    <button className="btn btn-warning" onClick={(event) => {
                        let addr = {
                            ...address,
                            addressName: this.addressName.value,
                            address: this.address.value,
                            city: this.city.value,
                            zipcode: this.zipcode.value,
                            state: this.state.value,
                            country: this.country.value
                        }
                        this.props.updateAddress(addr, address._id);
                    }}>Update Address
                    </button>}
                    {!this.props.user.role === 'RESTAURANT' && address._id !== undefined &&
                    <button className="btn btn-danger float-right">Delete</button>}
                    {address._id === undefined &&
                    <button className="btn btn-warning" onClick={(event) => {
                        let addressToCreate = {
                            addressName: this.addressName.value,
                            address: this.address.value,
                            city: this.city.value,
                            zipcode: this.zipcode.value,
                            state: this.state.value,
                            country: this.country.value
                        }
                        this.props.createUserAddress(addressToCreate, editUser._id);
                    }}>Create Address
                    </button>}
                </li>)
        })
        return <ul className="list-group">{addresses}</ul>;

    }

    userForm(editUser) {
        let username;
        let firstName;
        let lastName;
        let email;
        let phone;
        let dateOfBirth;
        return (
            <div>
                <div id="basicDetails">
                    <br/>
                    <h4>User Details</h4><br/>
                    <div className="form-group row">
                        <label htmlFor="usernameFld" className="col-sm-2 col-form-label">
                            Username
                        </label>
                        <div className="col-sm-10">
                            <input id="usernameFld"
                                   defaultValue={editUser.username}
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
                                   defaultValue={editUser.firstName}
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
                                   defaultValue={editUser.lastName}
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
                                   defaultValue={editUser.email}
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
                                   defaultValue={editUser.phone}
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
                                   defaultValue={editUser.dateOfBirth}
                                   ref={node => this.dateOfBirth = node}
                                   placeholder="MM/DD/YYYY"
                                   className="form-control"/>
                        </div>
                    </div>

                    <div className="form-group row">
                        <div className="col-sm-2"/>
                        <div className="col-sm-10">
                            <button id="updateProfile"
                                    onClick={() => {

                                        let user = editUser;
                                        user = {
                                            ...user,
                                            firstName: this.firstName.value,
                                            lastName: this.lastName.value,
                                            email: this.email.value,
                                            phone: this.phone.value,
                                            dateOfBirth: this.dateOfBirth.value
                                        };

                                        this.props.updateUserProfile(user, user._id)
                                    }}
                                    className="form-control btn btn-success">
                                Update Profile
                            </button>
                        </div>
                    </div>

                </div>

            </div>)
    }


    editUser(userId) {
        console.log("editUser : " + userId);
        this.activeSection = constants.ADMIN_USER_EDIT;
        this.props.updateEditableUser(userId);

        /*console.log("editUser : " + this.userDetailSec);*/
    }

    renderUser() {
        let users = this.props.users.map(user => {
            return <li className="list-group-item" key={user._id}>
                <a href="#">{user.username}</a>
                <button className="btn btn-danger float-right"
                        onClick={() => this.props.deleteUser(user._id)}
                >Delete
                </button>
                <button className="btn btn-warning float-right"
                        onClick={() => this.editUser(user._id)}>Update
                </button>
            </li>
        });
        return <ul className="list-group">
            {users}
        </ul>
    }

    renderRestaurants() {
        return (
            <div>
                {/*<h4>Restaurant List</h4>*/}
                <a href="#" onClick={(event) => this.restaurantStsSec = constants.REST_STATUS_PA}>
                    <h4> Restaurants Pending Approval </h4></a>
                {this.restaurantStsSec === constants.REST_STATUS_PA &&
                <div>{this.renderPARestaurants()}</div>}
                <a href="#" onClick={(event) => this.restaurantStsSec = constants.REST_STATUS_ACTIVE}>
                    <h4> Active Restaurants </h4></a>
                {this.restaurantStsSec === constants.REST_STATUS_ACTIVE &&
                <div>{this.renderActiveRestaurants()}</div>}
                <a href="#" onClick={(event) => this.restaurantStsSec = constants.REST_STATUS_INACTIVE}>
                    <h4> Inactive Restaurants </h4></a>
                {this.restaurantStsSec === constants.REST_STATUS_INACTIVE &&
                <div>{this.renderInactiveRestaurants()}</div>}
            </div>
        )
    }


    renderPARestaurants() {
        let paRestautants = this.props.restaurants.filter(
            restaurant => restaurant.restStatus === constants.REST_STATUS_PA);
        console.log("paRestautants.count: " + paRestautants.length);
        let rests = paRestautants.map(rest => {
            return <li className="list-group-item" key={rest._id}>
                {rest.name}
                {rest.phone}
                {rest.email}
                <button className="btn btn-secondary float-right"
                        onClick={() => {
                            let status = "ACTIVE";
                            this.props.changeStatus(rest._id, status)
                        }}>Approve
                </button>
            </li>
        });
        return (<ul className="list-group">{rests}</ul>);
    }

    renderActiveRestaurants() {
        let activeRestaurant = this.props.restaurants.filter(
            restaurant => restaurant.restStatus === constants.REST_STATUS_ACTIVE);
        console.log("activeRestaurant.count: " + activeRestaurant.length);
        /*this.renderRestaurantListItems(activeRestaurant);*/
        let restsActive = activeRestaurant.map(restAct => {
            return <li className="list-group-item" key={restAct._id}>
                {restAct.name}
                <button className="btn btn-secondary float-right"
                        onClick={() => {
                            let status = "INACTIVE";
                            this.props.changeStatus(restAct._id, status)
                        }}>Inactivate Restaurant
                </button>
            </li>
        });
        return (<ul className="list-group">{restsActive}</ul>);

    }

    renderInactiveRestaurants() {
        let inactiveRestaurant = this.props.restaurants.filter(
            restaurant => restaurant.restStatus === constants.REST_STATUS_INACTIVE);
        console.log("inactiveRestaurant.count: " + inactiveRestaurant.length);
        //this.renderRestaurantListItems(inactiveRestaurant);
        let restInact = inactiveRestaurant.map(restInactv => {
            return <li className="list-group-item" key={restInactv._id}>
                {restInactv.name}
                <button className="btn btn-secondary float-right"
                        onClick={() => {
                            let status = "ACTIVE";
                            this.props.changeStatus(restInactv._id, status)
                        }}>Activate Restaurant</button>
            </li>
        });
        return (<ul className="list-group">{restInact}</ul>);
    }
}

export default AdminComponent;
