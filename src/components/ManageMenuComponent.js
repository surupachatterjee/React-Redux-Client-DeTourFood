import React from 'react';
import swal from "sweetalert";

class ManageMenuComponent extends React.PureComponent {

    constructor(props) {
        super(props);
        this.state = {
            name: '',
            cuisineName: '',
            menuItems: ''
        }
        this.onChangeName = this.onChangeName.bind(this);
        this.onChangeCuisine = this.onChangeCuisine.bind(this);
        this.onChangeItems = this.onChangeItems.bind(this);
        this.updateMenu = this.updateMenu.bind(this);
    }

    onChangeName(input) {
        this.setState({
            name: input,
        });
    }
    onChangeCuisine(input) {
        this.setState({
            cuisineName: input,
        });
    }
    onChangeItems(input) {
        this.setState({
            menuItems: input,
        });
    }

    updateMenu() {
        let menu = {
            name: this.state.name,
            cuisineName: this.state.cuisineName,
            menuItems: this.state.menuItems
        }

        alert(this.state.name);
        this.props.updateRestaurantMenu(menu, this.props.restaurantId)
    }

    render() {
        let name, cuisineName, menuItems;
        return(
            <div className={"container card bg-light"}>
                <h1>Manage Menu</h1>
                <div className="main">
                    <div className="form-group row">
                        <div className="col-sm-1"/>
                        <div className="container-fluid col-sm-10">
                            <div className="form-group row">
                                <label htmlFor="menuName" className="col-sm-2 col-form-label">
                                    Menu Name
                                </label>
                                <div className="col-sm-10">
                                    <input id="menuName"
                                           ref={node => name = node}
                                           placeholder="Boston Shawarma's Menu"
                                           onChange={() => this.onChangeName(name.value)}
                                           type="text"
                                           className="form-control"/>
                                </div>
                            </div>
                            <div className="form-group row">
                                <label htmlFor="cuisineName" className="col-sm-2 col-form-label">
                                    Cuisine
                                </label>
                                <div className="col-sm-10">
                                    <input id="cuisineName"
                                           placeholder="Indian"
                                           ref={node => cuisineName = node}
                                           onChange={() => this.onChangeCuisine(cuisineName.value)}
                                           type="text"
                                           className="form-control"/>
                                </div>
                            </div>
                            <div className={"row form-group"}>
                                <label htmlFor="menuItems" className="col-sm-2 col-form-label">
                                Menu Items
                                </label>
                                <div className={"col-sm-10"}>
                                    <textarea  className={"form-control"}
                                               id = {"menuItems"}
                                               placeholder={"Enter one menu item per line: e.g. Falfel-$12"}
                                               rows={"8"}
                                               ref={node => menuItems =node}
                                               onChange={() => this.onChangeItems(menuItems.value)}/>
                                    *Enter menu items in Item-Price combination.
                                </div>
                            </div>
                            <div className={"form-group row"}>
                                <div className="col-sm-12">
                                <button className="btn btn-outline-success btn-block"
                                        onClick={() => this.updateMenu()}>
                                    Update Restaurant Menu
                                </button>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-1"/>
                    </div>
                    <div className="form-group row"/>
                </div>
            </div>
        )
    }
}


export default ManageMenuComponent;