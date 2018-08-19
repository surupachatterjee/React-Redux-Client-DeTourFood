import React from 'react';
import swal from "sweetalert";

class AddMenuComponent extends React.PureComponent {

    render() {
        let name, cuisine, type, items;
        return(
            <div className={"container"}>
                <h1>Add Menu</h1>
                <div className="main">
                    <div className="form-group row">
                        <div className="col-sm-3"/>
                        <div className="container-fluid col-sm-6">
                            <div className="form-group row">
                                <label htmlFor="menuName" className="col-sm-2 col-form-label">
                                    Menu Name
                                </label>
                                <div className="col-sm-10">
                                    <input id="menuName"
                                           ref={node => name = node}
                                           placeholder="Menu 1"
                                           className="form-control"
                                           type={"text"}/>
                                </div>
                            </div>
                            <div className="form-group row">
                                <label htmlFor="cuisineName" className="col-sm-2 col-form-label">
                                    Cuisine
                                </label>
                                <div className="col-sm-10">
                                    <input id="cuisineName"
                                           placeholder="Indian"
                                           ref={node => cuisine = node}
                                           type="text"
                                           className="form-control"/>
                                </div>
                            </div>
                            <div className="form-group row">
                                <label htmlFor="menuType" className="col-sm-2 col-form-label">
                                    Menu Type
                                </label>
                                <div className="col-sm-10">
                                    <select ref={node => (type = node)}
                                        className="form-control">
                                        <option value="BREAKFAST">Breakfast</option>
                                        <option value="LUNCH">Lunch</option>
                                        <option value="DINNER">Dinner</option>
                                    </select>
                                </div>
                            </div>

                            <div className="form-group row">
                                <label className="col-sm-2 col-form-label"/>
                                <div className="col-sm-10">
                                    <button className="btn btn-success btn-block"
                                            onClick={() => {}}>
                                        Add Menu
                                    </button>
                                </div>
                            </div>
                            <div className="form-group row">
                                <label className="col-sm-2 col-form-label"/>
                                <div className="col-sm-10">
                                    <button className="btn btn-success btn-block"
                                            onClick={() => {}}>
                                        Update Menu
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-3"/>
                    </div>
                    <div className="form-group row"/>
                </div>
            </div>
        )
    }
}


export default AddMenuComponent;