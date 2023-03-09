import './App.css'
import Card from './components/Card'
import Cards from './components/Cards.jsx'
import SearchBar from './components/SearchBar.jsx'
import {characters, Rick} from './data.js'

//Hecho por adalsus
function App() {
  return (
    <div className='App' style={{ padding: '25px' }}>
      <div>
        <Card
          campos={Rick}
          onClose={() => window.alert('Emulamos que se cierra la card')}
        />
      </div>
      <hr />
      <div>
        <Cards
          characters={characters}
        />
      </div>
      <hr />
      <div>
        <SearchBar
          onSearch={(characterID) => window.alert(characterID)}
        />
      </div>
    </div>
  )
}
//Estudiante: Adalberto Monar devFT-36a

export default App
