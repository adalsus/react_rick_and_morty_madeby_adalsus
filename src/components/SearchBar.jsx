import {Entrada, BtnAgregar, Actividad} from "../css/estilos.jsx";

const SearchBar = function(props) {
   return (
      <Actividad>
         <Entrada type='number' onChange={props.onChange}></Entrada>
         <BtnAgregar onClick={props.onSearch}>Agregar</BtnAgregar>
      </Actividad>
   );
}

export default SearchBar;