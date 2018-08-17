import React from 'react';

class LoginComponent extends React.PureComponent{
    render(){
        let username;
        let password;
        return(
            <div className="main">
                <div className="form-group row"/>
                <div className="form-group row">
                    <div className="col-sm-3"/>
                    <div className="container-fluid col-sm-6">
                        <h1 style={{"color" :"white"}}>Sign In</h1>
                        <div className="form-group row"/>
                        <div className="form-group row">
                            <label htmlFor="usernameFld" className="col-sm-2 col-form-label">
                                Username
                            </label>
                            <div className="col-sm-10">
                                <input id="usernameFld"
                                       ref={node => this.username = node}
                                       placeholder="alice.smith"
                                       className="form-control"/>
                            </div>
                        </div>

                        <div className="form-group row">
                            <label htmlFor="passwordFld" className="col-sm-2 col-form-label">
                                Password
                            </label>
                            <div className="col-sm-10">
                                <input id="passwordFld"
                                       placeholder="*********"
                                       ref={node => this.password = node}
                                       type="password"
                                       className="form-control"/>
                            </div>
                        </div>


                        <div className="form-group row">
                            <label className="col-sm-2 col-form-label"/>
                            <div className="col-sm-10">
                                <button className="btn btn-success btn-block"
                                        onClick={() => {
                                            let user = {
                                                username: this.username.value,
                                                password: this.password.value
                                            };
                                            if (this.username.value === '') {
                                                alert("Please enter valid username");
                                            }else if(this.password.value === ''){
                                                alert("Please enter valid password");
                                            }else{
                                                this.props.login(user);
                                            }
                                        }}>
                                    Sign In
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-3"/>
                </div>
                <div className="form-group row"/>
            </div>
        )
    }

}

export default LoginComponent;