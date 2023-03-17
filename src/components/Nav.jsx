import { Menu, Enlaces } from "../css/estilos.jsx";
import SearchBar from './SearchBar.jsx';
import { Link } from "react-router-dom";

const Nav = function( props ) {
    return (
        <Menu>
            <Enlaces>
                <pre>   ✶ </pre>
                <Link to='/'>Home</Link><pre>      </pre>
                <Link to='/about'>About</Link>
                <pre>     </pre>
            </Enlaces>
            <SearchBar onSearch={ props.onSearch } onChange={props.onChange} />
        </Menu>
    );
}

export default Nav;