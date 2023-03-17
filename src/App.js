import './App.css'
import Cards from './components/Cards.jsx'

import {characters} from './data.js'
import {dlssVALOR} from './data/app_k_.dlss'
import valCSS from './js/ids/App/idsApp.js'
import Nav from './components/Nav.jsx'
import React from 'react';

import {fn_hayID} from './js/fns/fnsApp.js';
import { Routes, Route } from 'react-router-dom'
import About from './components/About.jsx'
import Detail from './components/Detail.jsx'

//Hecho por adalsus
function App() {

  const [TextInput, setTextInput] = React.useState( '' );
  const handleChange = (e) => {
    setTextInput( e.target.value+'' );
  };

  const [Figuritas, setFiguritas] = React.useState([...characters]);
  const characterID = () => {

  const cromo = fn_hayID(TextInput-0,characters);
    if (cromo.length===0 && TextInput-0>0) {

      const URL_BASE = 'https://be-a-rym.up.railway.app/api';
      const API_KEY = dlssVALOR();
      
      //return window.alert(`${URL_BASE}/character/${TextInput}?key=${API_KEY}`);
      /*React.useEffect(*/
        /*() => {*/

            fetch (   `${URL_BASE}/character/${TextInput}?key=${API_KEY}`   ) 
            .then (   res => res.json()   )
            .then (   data => {   
                        if (data.name) {
                          const obj_data = {
                            id: (data.id)-0,
                            name: data.name,
                            status: data.status,
                            species: data.species,
                            gender: data.gender,
                            origin: data.origin,
                            image: data.image,
                          }
                          characters.push(obj_data);
                          setFiguritas( characters.map( (elem,i) => Figuritas[i]=elem ) );
                        } else {
                          window.alert('No hay personaje con ese ID');
                        }
                      }
                  )

        /*},*/
        /*[],*/ 
      /*);*/

    } else {
      if (cromo[0]!==undefined) {
        window.alert(`El ${cromo[0]} es ID de ${cromo[1]}, osea ya está desplegado`);
      } else window.alert(`Por favor, ingrese un número y que sea mayor a cero`);
    }
    //console.log(Figuritas);
  };




  return (
    <div className='App'  style = 
                          {{  paddingTop: valCSS.padSup,
                              backgroundImage: valCSS.urlImg,
                              backgroundSize: valCSS.bgSize 
                          }}>
      <Routes>
        <Route path='/' element={
          <Cards characters={characters} Figuritas={Figuritas} setFiguritas={setFiguritas}/>
        }/>
        <Route path='/about' element={<About/>}/>
        <Route path='/detail/:detailId' element={<Detail characters={characters} />}/>
      </Routes>
      <hr />
      <Nav onSearch={ characterID } onChange={ handleChange } />
    </div>
  )
}
//Estudiante: Adalberto Monar devFT-36a



export default App