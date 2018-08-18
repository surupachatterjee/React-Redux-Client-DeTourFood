import React from 'react';
import history from "../History";


class NavBarComponent extends React.PureComponent {

    render() {
        let location;
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
                                       href="#">
                                        Home
                                        <span className="sr-only">
                                            (current)
                                        </span>
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link"
                                       href="#">Login</a>
                                </li>
                            </ul>
                            <form className="form-inline my-2 my-lg-0">
                                <input className="form-control mr-sm-2 input-lg"
                                       type="search"
                                       placeholder="Search"
                                       value={"Seattle"}
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
