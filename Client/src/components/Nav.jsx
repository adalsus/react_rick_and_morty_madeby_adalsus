import React from "react";

import { Menu, Enlaces } from ".././css/estilos.js";
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
    constructor(props) {
        super(props);

        this.handleClicEnlaces = props.handleClicEnlaces;
    }

    render() {
        return (
            <Menu>
                <Enlaces>
                    <pre>   * </pre>
                    <Link to='/' onClick={this.props.handleClicEnlaces}>Home</Link><pre>      </pre>
                    <Link to='/about' onClick={this.props.handleClicEnlaces}>About</Link>
                    <pre>     </pre>
                    <Link to='/favoritos' onClick={this.props.handleClicEnlaces}>Favoritos</Link>
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