const SearchBar = function(props) {
   return (
      <div>
         <input type='search' />
         <button onClick={props.onSearch}>Agregar</button>
      </div>
   );
}

export default SearchBar;