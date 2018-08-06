import React from 'react';
import '../styles/HomeComponent.css';

class HomeComponent extends React.PureComponent {

    render() {
        return(
            <div>
                <div>
                    <br/>
                    <img src={require("../images/HomeImage3.jpg")}/>
                </div>
            </div>
        );
    }
}

export default HomeComponent;