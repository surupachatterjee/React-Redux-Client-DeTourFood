import React from 'react';
import MenuComponent from '../components/MenuComponent';

export default class MenuContainer extends React.PureComponent {

    render() {
        return(
            <div className={"container"}>
                <MenuComponent/>
            </div>
        );
    }
}