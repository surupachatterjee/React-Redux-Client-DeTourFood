import React from 'react';

class MenuComponent extends React.PureComponent {

    render() {
        return(
            <div className={"container"}>
                <div>
                    <h1>Menu</h1>
                    {this.props.menu && this.props.menu.map(menu => {
                        console.log(menu);
                        return (
                            <div className="card w-50" key={menu.id}>
                                <div className="card-body" key={menu.id}>
                                    <h4 className="card-title">Menu Type: {menu.type}</h4>
                                    <h4 className="card-title">Menu Item: {menu.menuitem}</h4>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        );
    }
}

export default MenuComponent;