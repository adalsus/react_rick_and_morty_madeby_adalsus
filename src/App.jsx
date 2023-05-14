import './App.css';
import Cards from './components/Cards.jsx';

import { characters } from './data.js';
import { valCSS } from './js/ids/App/idsApp.js';
import { URL_BASE } from './js/ids/App/idsApp.js';
import Nav from './components/Nav.jsx';

import React from 'react';
import axios from 'axios';

import { fn_hayID } from './js/fns/fnsApp.js';

import { Routes, Route } from 'react-router-dom';

import About from './components/About.jsx';
import Detail from './components/Detail.jsx';

import Favoritos from './components/Favoritos.jsx';


//Hecho por adalsus

//FORMA CON FUNCTION  <-- Falta actualizarla
/* 
function App() {

    //Usé identificador TextInput en vez de poner id
    const [TextInput, setTextInput] = React.useState('');


    const handleChange = (e) => {
        setTextInput(e.target.value+'');
    };


    //Usé identificador Figuritas en vez de poner characters
    //y lo inicialicé con los characters de data.js
    const [Figuritas, setFiguritas] = React.useState([...characters]);

    //Usé identificador characterID en vez de poner onSearch
    const characterID = () => {
        const cromo = fn_hayID(TextInput - 0, characters);
        if (cromo.length === 0 && TextInput - 0 > 0) {

            axios(`${URL_BASE}/character/${TextInput}`)
            .then(
                ({ data }) => {
                    const obj_data = {
                        id: (data.id) - 0,
                        name: data.name,
                        status: data.status,
                        species: data.species,
                        gender: data.gender,
                        origin: data.origin,
                        image: data.image,
                    }
                    characters.push(obj_data);
                    setFiguritas(characters.map((elem, i) => Figuritas[i] = elem));
                }
            )
            .catch(
                (error) => {
                    window.alert(`${error.response.data.error} => No hay personaje con el ID ${TextInput}`);
                }
            )

        } else {
            if (cromo[0] !== undefined) {
                window.alert(`El ${cromo[0]} es ID de ${cromo[1]}, osea ya est\u00E1 desplegado`);
            } else window.alert(`Por favor, ingrese un n\u00FAmero y que sea mayor a cero`);
        }
    };


    return (
        <div className='App' style=
            {{
                paddingTop: valCSS.padSup,
                backgroundImage: valCSS.urlImg,
                backgroundSize: valCSS.bgSize
            }}>
                
                <Routes>
                
                    <Route path='/' element={
                        <Cards characters={characters} Figuritas={this.state.Figuritas} setFiguritas={this.state.setFiguritas} />
                    }/>

                    <Route path='/about' element={<About/>}/>
                    <Route path='/detail/:detailId' element={<Detail characters={characters} />}/>
                
                </Routes>

            <hr />
            <Nav onSearch={characterID} onChange={handleChange} />
        </div>
    );
}
/* */


//FORMA CON CLASS
/* */
class App extends React.Component {

    //Usé identificador TextInput en vez de poner id
    state = { 
        TextInput: '',
        Figuritas: [...characters],
        setFiguritas: undefined,
        valBAdd: false,
    }
    //P.D.: Usé identificador Figuritas en vez de poner characters
    //      y lo inicialicé con los characters de data.js

    handleChange = (e) => {
        //setTextInput(e.target.value + ''); <-- así es con componente funcional
        this.setState(
            (() => {  Object.assign(this.state,{TextInput: e.target.value+''})  })
        )
    }

    characterID = () => {
        const cromo = fn_hayID(this.state.TextInput - 0, characters);
        if (cromo.length === 0 && this.state.TextInput - 0 > 0) {

            axios(`${URL_BASE}/character/${this.state.TextInput}`)
            .then(
                ({ data }) => {
                    const obj_data = {
                        id: (data.id) - 0,
                        name: data.name,
                        status: data.status,
                        species: data.species,
                        gender: data.gender,
                        origin: data.origin,
                        image: data.image,
                    }
                    characters.push(obj_data);
                        //setFiguritas(characters.map((elem, i) => Figuritas[i] = elem)); <-- así es con componente funcional
                    this.setState(
                        (() => { Object.assign(this.state, { Figuritas: [...characters] })  })
                    )
                }
            )
            .catch(
                (error) => {
                    window.alert(`${error.response.data.error} => No hay personaje con el ID ${this.state.TextInput}`);
                }
            )

        } else {
            if (cromo[0] !== undefined) {
                window.alert(`El ${cromo[0]} es ID de ${cromo[1]}, osea ya est\u00E1 desplegado`);
            } else window.alert(`Por favor, ingrese un n\u00FAmero y que sea mayor a cero`);
        }
        //console.log(Figuritas);
    }


    render() {
        return (
            <div className='App' style=
                {{
                    paddingTop: valCSS.padSup,
                    backgroundImage: valCSS.urlImg,
                    backgroundSize: valCSS.bgSize
                }}>
                
                <Routes>
                
                    <Route path='/' element={
                        <Cards 
                            characters={characters} 
                            Figuritas={this.state.Figuritas} 
                            setFiguritas={this.state.setFiguritas}
                            state={this.state}
                            setState={this.setState}
                        />
                    }/>

                    <Route path='/about' element = {<About state={this.state} />}
                    />
                    <Route path='/detail/:detailId' element={<Detail characters={characters} state={this.state} />}
                    />

                    <Route path='/favoritos' element = {<Favoritos state={this.state} />}
                    />
                
                </Routes>

                <hr />
                <Nav 
                    onSearch={this.characterID} 
                    onChange={this.handleChange}
                    valBAdd={this.state.valBAdd}
                />
            </div>
        );
    }
}
/* */

//Estudiante: Adalberto Monar


export default App;
