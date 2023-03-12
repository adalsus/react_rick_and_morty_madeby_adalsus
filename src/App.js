import './App.css'
import Cards from './components/Cards.jsx'
import SearchBar from './components/SearchBar.jsx'
import {characters} from './data.js'
import valCSS from './js/ids/App/idsApp.js'



//Hecho por adalsus
function App() {
  return (
    <div className='App'  style = 
                          {{  paddingTop: valCSS.padSup,
                              backgroundImage: valCSS.urlImg,
                              backgroundSize: valCSS.bgSize 
                          }}>
      
      <Cards characters={characters} />
      <hr />
      <SearchBar onSearch={(characterID) => window.alert(characterID)} />
    </div>
  )
}
//Estudiante: Adalberto Monar devFT-36a

export default App
