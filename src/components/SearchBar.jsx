import { Entrada, BtnAgregar, Menu, Actividad } from "../css/estilos.jsx";

export default function SearchBar(props) {
   return (
       <Menu>
           <Actividad>
               <Entrada type='search'></Entrada>
               <BtnAgregar onClick={props.onSearch}>Agregar</BtnAgregar>
           </Actividad>
       </Menu>
   );
}
