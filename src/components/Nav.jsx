import {Menu} from "../css/estilos.jsx";
import SearchBar from './SearchBar.jsx';

const Nav = function( props ) {
    return (
        <Menu>
            <SearchBar onSearch={ props.onSearch } onChange={props.onChange} />
        </Menu>
    );
}

export default Nav;