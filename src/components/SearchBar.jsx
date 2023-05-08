import React from "react";

import { Entrada, BtnAgregar, Actividad } from ".././css/estilos.jsx";


//FORMA CON FUNCTION
/* 
function SearchBar(props) {
   return (
        <Actividad>
               <Entrada type='number' onChange={props.onChange}></Entrada>
               <BtnAgregar onClick={props.onSearch}>Agregar</BtnAgregar>
        </Actividad>
   );
}
/* */

//FORMA CON CLASS
/* */
class SearchBar extends React.Component {
    render() {
        return (
            <Actividad>
                <Entrada type='number' onChange={this.props.onChange}></Entrada>
                <BtnAgregar id='btnAdd' onClick={this.props.onSearch} disabled={this.props.valBAdd}>Agregar</BtnAgregar>
            </Actividad>
        );
    }
}
/* */


export default SearchBar;