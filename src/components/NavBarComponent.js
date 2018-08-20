import React from 'react';
import history from '../History'


class NavBarComponent extends React.PureComponent {

    render() {
        let location;
        console.log("login value" + this.props.loggedIn);
        return(
            <div>
                <div>
                    <nav className="navbar navbar-expand-lg navbar-light bg-light">
                        <button className="navbar-toggler" type="button" data-toggle="collapse"
                                data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01"
                                aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
                            <a className="navbar-brand" href="#">DeTour Food</a>
                            <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                                <li className="nav-item active">
                                    <a className="nav-link"
                                       onClick={() => this.props.visitHome()}
                                       href="#">
                                        Home
                                        <span className="sr-only">
                                            (current)
                                        </span>
                                    </a>
                                </li>
                                {!this.props.loggedIn &&
                                <li className="nav-item">
                                    <a className="nav-link"
                                       href="/login">Login</a>
                                </li>}
                                {!this.props.loggedIn &&
                                <li className="nav-item">
                                    <a className="nav-link"
                                       href="/registerUser">Register</a>
                                </li>}
                                {this.props.loggedIn &&
                                <li className="nav-item nav-link">
                                    <a href='#' onClick={() => this.props.visitProfile()}> LoggedIn As:{this.props.user.username}</a>
                                </li>}
                                {this.props.loggedIn && this.props.user.role==='ADMIN' &&
                                <li className="nav-item nav-link">
                                    <a href='#' onClick={() => this.props.visitAdminPage()} >Admin</a>
                                </li>}
                                {this.props.loggedIn &&
                                <li className="nav-item nav-link">
                                    <a href='#' onClick={() => this.props.visitOrdersPage()}>View Current Order</a>
                                </li>}
                                {this.props.loggedIn &&
                                <li className="nav-item nav-link">
                                    <a href='#' onClick={() =>this.props.logout()}>Logout</a>
                                </li>}
                            </ul>
                            <form className="form-inline my-2 my-lg-0">
                                <input className="form-control mr-sm-2 input-lg"
                                       type="search"
                                       placeholder="Search"
                                       aria-label="Search"
                                       ref={node => location = node}/>
                                    <button onClick={() => {
                                        this.props.searchRestaurants(location.value)
                                        history.push("/search");
                                    }}
                                            className="btn btn-outline-success my-2 my-sm-0"
                                            type="button">
                                        Search By City
                                    </button>
                            </form>
                        </div>
                    </nav>
                </div>
            </div>
        );
    }
}

export default NavBarComponent;