import React from 'react';

class MenuComponent extends React.PureComponent {

    render() {
            return(
                <div className={"container"}>
                        <div className={"row"}>
                            <div className={"col-sm-7"}>
                                <h1>Menu</h1>
                            </div>
                            <div className={"col-sm-3"}>
                                <select className="form-control">
                                    <option value="BREAKFAST">Breakfast</option>
                                    <option value="LUNCH">Lunch</option>
                                    <option value="DINNER">Dinner</option>
                                </select>
                            </div>
                        </div>
                    {this.props.menus && this.props.menus.map(menu => (
                        <div key={menu.id}>
                            <div className={"row"}>
                                <div className={"col-sm-2"}>
                                    <h4>Menu Type: {menu.type}</h4>
                                    <ul>
                                        <li className={"list-group-item"}>
                                            menu.type
                                        </li>
                                    </ul>
                                </div>
                                <div className={"col-sm-2"}>
                                    <h4>Menu Item: {menu.menuitem}</h4>
                                    <ul>
                                        <li className={"list-group-item"}>
                                            menu.menuitem
                                        </li>
                                    </ul>
                                </div>
                                <div className={"col-sm-1"}>
                                    <button className={"btn btn-outline-warning"}
                                            /*onClick={addMenuItem(menu.menuitem)}*/>
                                        Add
                                    </button>
                                </div>
                                <div className={"col-sm-1"}>
                                    <button className={"btn btn-outline-warning"}>
                                        Order now
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                    </div>
            );
        }
    }


export default MenuComponent;