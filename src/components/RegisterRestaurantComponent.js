import React from 'react';

class RegisterRestaurantComponent extends React.PureComponent {

    render() {
        let username;
        let password;
        let verifyPassword;
        let restName;
        let restRole;
        let phone;
        let email;
        let addr1;
        let addr2;
        let city;
        let state;
        let zip;
        let country;
        let restAddr;
        let user;
        return(
            <div>
                <div className="container">
                    <h1>Sign Up As a Restaurant</h1>
                    <form>
                        <div className="form-group row">
                            <label htmlFor="username"
                                   className="col-sm-3 col-form-label">
                                <h4> Username </h4>
                            </label>
                            <div className="col-sm-9">
                                <div className="input-group input-group-lg">
                                    <input className="form-control"
                                           id="username"
                                           ref={node => this.username = node}
                                           placeholder="Alice"/>
                                </div>
                            </div>
                        </div>
                        <div className="form-group row">
                            <label htmlFor="password"
                                   className="col-sm-3 col-form-label">
                                <h4> Password </h4>
                            </label>
                            <div className="col-sm-9">
                                <div className="input-group input-group-lg">
                                    <input type="password"
                                           className="form-control wbdv-password-fld"
                                           id="password"
                                           ref={node => this.password = node}
                                           placeholder="123qwe#$%"/>
                                </div>
                            </div>
                        </div>
                        <div className="form-group row">
                            <label htmlFor="confirmPassword"
                                   className="col-sm-3 col-form-label">
                                <h4> Confirm Password </h4>
                            </label>
                            <div className="col-sm-9">
                                <div className="input-group input-group-lg">
                                    <input type="password"
                                           className="form-control wbdv-password-fld"
                                           id="confirmPassword"
                                           ref={node => this.verifyPassword = node}
                                           placeholder="123qwe#$%"/>
                                </div>
                            </div>
                        </div>
                        <div className="form-group row">
                            <label htmlFor="restaurantName"
                                   className="col-sm-3 col-form-label">
                                <h4> Restaurant Name </h4>
                            </label>
                            <div className="col-sm-9">
                                <div className="input-group input-group-lg">
                                    <input className="form-control"
                                           id="restaurantName"
                                           ref={node => this.restName = node}
                                           placeholder="Pizza Express"/>
                                </div>
                            </div>
                        </div>
                        <div className="form-group row">
                            <label htmlFor="restaurantRole"
                                   className="col-sm-3 col-form-label">
                                <h4> Restaurant Role </h4>
                            </label>
                            <div className="col-sm-9">
                                <div className="input-group input-group-lg">
                                    <select className="form-control"
                                           id="restaurantRole"
                                            ref={node => this.restRole = node}>
                                        <option value="">Restaurant Role</option>
                                        <option value="MANAGER">Manager</option>
                                        <option value="CHEF">Chef</option>
                                    </select>
                                </div>
                            </div>
                        </div>

                        <div className="form-group row">
                            <label htmlFor="phone"
                                   className="col-sm-3 col-form-label">
                                <h4> Phone</h4>
                            </label>
                            <div className="col-sm-9">
                                <div className="input-group input-group-lg">
                                    <input className="form-control"
                                           id="phone"
                                           ref={node => this.phone = node}
                                           placeholder="123-456-7890"/>
                                </div>
                            </div>
                        </div>
                        <div className="form-group row">
                            <label htmlFor="email"
                                   className="col-sm-3 col-form-label">
                                <h4> Email </h4>
                            </label>
                            <div className="col-sm-9">
                                <div className="input-group input-group-lg">
                                    <input className="form-control"
                                           id="email"
                                           ref={node => this.email = node}
                                           placeholder="email"/>
                                </div>
                            </div>
                        </div>

                        <div className="form-group row">
                            <label htmlFor="addrline1"
                                   className="col-sm-3 col-form-label">
                                <h4> Address Line1 </h4>
                            </label>
                            <div className="col-sm-9">
                                <div className="input-group input-group-lg">
                                    <input className="form-control"
                                           id="addrline1"
                                           ref={node => this.addr1 = node}
                                           placeholder="Address  Line 1"/>
                                </div>
                            </div>
                        </div>
                        <div className="form-group row">
                            <label htmlFor="addrline2"
                                   className="col-sm-3 col-form-label">
                                <h4> Address Line 2 </h4>
                            </label>
                            <div className="col-sm-9">
                                <div className="input-group input-group-lg">
                                    <input className="form-control"
                                           id="addrline2"
                                           ref={node => this.addr2 = node}
                                           placeholder="Address  Line 2"/>
                                </div>
                            </div>
                        </div>
                        <div className="form-group row">
                            <label htmlFor="city"
                                   className="col-sm-3 col-form-label">
                                <h4>City </h4>
                            </label>
                            <div className="col-sm-9">
                                <div className="input-group input-group-lg">
                                    <input className="form-control"
                                           id="city"
                                           ref={node => this.city = node}
                                           placeholder="City"/>
                                </div>
                            </div>
                        </div>
                        <div className="form-group row">
                            <label htmlFor="state"
                                   className="col-sm-3 col-form-label">
                                <h4>State </h4>
                            </label>
                            <div className="col-sm-9">
                                <div className="input-group input-group-lg">
                                    <input className="form-control"
                                           id="state"
                                           ref={node => this.state = node}
                                           placeholder="State"/>
                                </div>
                            </div>
                        </div>
                        <div className="form-group row">
                            <label htmlFor="zip"
                                   className="col-sm-3 col-form-label">
                                <h4>Zip </h4>
                            </label>
                            <div className="col-sm-9">
                                <div className="input-group input-group-lg">
                                    <input className="form-control"
                                           id="zip"
                                           ref={node => this.zip = node}
                                           placeholder="Zip"/>
                                </div>
                            </div>
                        </div>
                        <div className="form-group row">
                            <label htmlFor="country"
                                   className="col-sm-3 col-form-label">
                                <h4>Country </h4>
                            </label>
                            <div className="col-sm-9">
                                <div className="input-group input-group-lg">
                                    <input className="form-control"
                                           id="country"
                                           ref={node => this.country = node}
                                           placeholder="Country"/>
                                </div>
                            </div>
                        </div>
                        <div className="form-group row">
                            <label className="col-sm-3 col-form-label">
                            </label>
                            <div className="col-sm-9">
                                <button type="button"
                                        className="btn btn-success btn-lg btn-block"
                                        onClick={() => {
                                            let restAddr = {
                                                addressName: this.restName.value,
                                                addressLine1: this.addr1.value,
                                                addressLine2: this.addr2.value,
                                                city: this.city.value,
                                                state: this.state.value,
                                                zip: this.zip.value,
                                                country: this.country.value,
                                                primaryShipAddr: true,
                                                billingAddr: true
                                            }
                                            let user = {
                                                username: this.username.value,
                                                password: this.password.value,
                                                userStatus: 'PENDING_APPROVAL',
                                                role:   'RESTAURANT',
                                                restaurantRole:this.restRole.value,
                                                creationDate:new Date(),
                                                email: this.email.value,
                                                phone: this.phone.value,
                                                addresses :[restAddr],
                                                zomatoRest: {}
                                                };
                                            this.props.createRestUser(user)
                                        }}
                                        id="register">
                                    Sign Up
                                </button>
                                <div className="row">
                                    <div className="col-1">
                                    </div>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}

export default RegisterRestaurantComponent;


