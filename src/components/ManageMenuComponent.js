import React from 'react';
import swal from "sweetalert";
import '../styles/ManageMenuComponent.css';

class ManageMenuComponent extends React.PureComponent {

    constructor(props) {
        super(props);
    }

    /*componentDidMount() {
        this.props.findRestaurantById(this.props.restaurantId);
        /!*if (this.props.restaurant) {
            this.props.findMenuById(this.props.restaurant.menu);
        }*!/
    }*/





    render() {
        let menu = this.props.menu;
        let name, cuisineName, menuItems;
        return(
            <div className={"container card bg-light"}>
                <h1>Manage Menu</h1>
                {menu &&
                <div className="main">
                    <div className="form-group row">
                        <div className="col-sm-1"/>
                        <div className="container-fluid col-sm-10">
                            <div className="form-group row">
                                <label htmlFor="menuName" className="col-sm-2 col-form-label blk">
                                    Menu Name
                                </label>
                                <div className="col-sm-10">
                                    <input id="menuName"
                                           ref={node => name = node}
                                           placeholder="Boston Shawarma's Menu"
                                           onChange={() => this.props.changeMenuName(name.value)}
                                           type="text"
                                           className="form-control"
                                           value={this.props.name}/>
                                </div>
                            </div>
                            <div className="form-group row">
                                <label htmlFor="cuisineName" className="col-sm-2 col-form-label blk">
                                    Cuisine
                                </label>
                                <div className="col-sm-10">
                                    <input id="cuisineName"
                                           placeholder="Indian"
                                           ref={node => cuisineName = node}
                                           onChange={() => this.props.changeMenuCuisine(cuisineName.value)}
                                           type="text"
                                           className="form-control"
                                           value={this.props.cuisineName}/>
                                </div>
                            </div>
                            <div className={"row form-group"}>
                                <label htmlFor="menuItems" className="col-sm-2 col-form-label blk">
                                    Menu Items
                                </label>
                                <div className={"col-sm-10"}>
                                    <textarea className={"form-control"}
                                              id={"menuItems"}
                                              placeholder={"Enter one menu item per line: e.g. Falfel-$12"}
                                              rows={"8"}
                                              ref={node => menuItems = node}
                                              onChange={() => this.props.changeMenuItems(menuItems.value)}
                                              value={this.props.menuItems}/>
                                    *Enter menu items in Item-Price combination.
                                </div>
                            </div>
                            <div className={"form-group row"}>
                                <div className="col-sm-12">
                                    <button className="btn btn-outline-success btn-block"
                                            onClick={() => this.props.updateMenu()}>
                                        Update Restaurant Menu
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-1"/>
                    </div>
                    <div className="form-group row"/>
                </div>
                 }
            </div>

        )
    }
}


export default ManageMenuComponent;