import React from 'react';

class RegisterRestaurantComponent extends React.PureComponent {

    render() {
        return(
            <div>
                <div className="container">
                    <h1>Register As a Restaurant</h1>
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
                                           placeholder="123qwe#$%"/>
                                </div>
                            </div>
                        </div>
                        <div className="form-group row">
                            <label htmlFor="password"
                                   className="col-sm-3 col-form-label">
                                <h4> Confirm Password </h4>
                            </label>
                            <div className="col-sm-9">
                                <div className="input-group input-group-lg">
                                    <input type="password"
                                           className="form-control wbdv-password-fld"
                                           id="confirmPassword"
                                           placeholder="123qwe#$%"/>
                                </div>
                            </div>
                        </div>
                        <div className="form-group row">
                            <label className="col-sm-3 col-form-label">
                            </label>
                            <div className="col-sm-9">
                                <button type="button"
                                        className="btn btn-primary btn-lg btn-block"
                                        id="register">
                                    Register
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


