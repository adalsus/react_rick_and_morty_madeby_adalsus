import {Entrada, BtnAgregar, Menu, Actividad} from "../css/estilos.jsx";

const SearchBar = function(props) {
   return (
      <Menu>
         <Actividad>
            <Entrada type='search'></Entrada>
            <BtnAgregar onClick={props.onSearch}>Agregar</BtnAgregar>
         </Actividad>
      </Menu>
   );
}

export default SearchBar;