import React from "react";

import { Menu } from ".././css/estilos.jsx";
import SearchBar from './SearchBar.jsx';


//FORMA CON FUNCTION
/* 
const Nav = function(props) {
    return (
        <Menu>
            <SearchBar onSearch={ props.onSearch } onChange={props.onChange} />
        </Menu>
    );
}
/* */


//FORMA CON CLASS
/* */
class Nav extends React.Component {
    render() {
        return (
            <Menu>
                <SearchBar onSearch={ this.props.onSearch } onChange={this.props.onChange} />
            </Menu>
        );
    }
}
/* */


export default Nav;