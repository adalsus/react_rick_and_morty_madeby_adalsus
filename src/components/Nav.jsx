import React from "react";

import { Menu, Enlaces } from ".././css/estilos.jsx";
import SearchBar from './SearchBar.jsx';
import { Link } from "react-router-dom";


//FORMA CON FUNCTION  <-- Falta actualizarla
/* 
const Nav = function(props) {
    return (
        <Menu>
            <Enlaces>
                <pre>   * </pre>
                <Link to='/'>Home</Link><pre>      </pre>
                <Link to='/about'>About</Link>
                <pre>     </pre>
            </Enlaces>
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
                <Enlaces>
                    <pre>   * </pre>
                    <Link to='/'>Home</Link><pre>      </pre>
                    <Link to='/about'>About</Link>
                    <pre>     </pre>
                    <Link to='/favoritos'>Favoritos</Link>
                    <pre>     </pre>
                </Enlaces>
                <SearchBar 
                    onSearch={this.props.onSearch} 
                    onChange={this.props.onChange}
                    valBAdd={this.props.valBAdd}
                />
            </Menu>
        );
    }
}
/* */

//Estudiante:  Adalberto Monar

export default Nav;