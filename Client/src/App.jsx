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

import { Ordenes } from './css/estilos.js'

import { connect } from 'react-redux';
import { copyAllaFav } from './redux/actions.js';

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

   constructor(props) {
        super(props);

        this.myFavorites = props.myFavorites;
        this.allMyFavorites = props.allMyFavorites;
    }

    allCharacters = [...characters];
    //Usé identificador TextInput en vez de poner id
    state = { 
        TextInput: '',
        Figuritas: [...characters],
        setFiguritas: undefined,
        valBAdd: false,
        valOrdenes: 'hidden',
        misFavoritos: [...this.props.myFavorites]
    }
    //P.D.: Usé identificador Figuritas en vez de poner characters
    //      y lo inicialicé con los characters de data.js

    componentDidMount() {
        //Llamo a este método a lo que se monta o carga este componente
        this.handleClicEnlaces(null, 'HOME');
    }
    componentWillUnmount() {
        //Llamo a este método a lo que se desmonta o se sale de este componente
        this.handleClicEnlaces(null, 'HOME');
    }

    updateState = (key, value) => {
        Object.assign(this.state, { key:value });
        this.setState(
            { ...this.state }
        )
    }

    handleChange = (e) => {
        //setTextInput(e.target.value + ''); <-- así es con componente funcional
        Object.assign(this.state, { TextInput:e.target.value + '' });
        this.setState(
            { ...this.state }
        )
    }

    characterID = () => {
        const cromo = fn_hayID(this.state.TextInput - 0, this.allCharacters);
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
                    this.allCharacters.push(obj_data);
                    //setFiguritas(characters.map((elem, i) => Figuritas[i] = elem)); <-- así es con componente funcional
                    
                    Object.assign( this.state.Figuritas, [...this.state.Figuritas,obj_data] )
                    this.setState(
                       { ...this.state }
                    )
                    //console.log(`Figuritas: ${this.state}`)

                    //Lo siguiente resetea el filtro del género y lo del orden
                    //console.log(`selec_filtro: ${document.getElementById('selec_filtro').value}`)
                    if (document.getElementById('selec_filtro')) {
                        document.getElementById('selec_filtro').value = 'none';
                        document.getElementById('ascendente').checked = false;
                        document.getElementById('descendente').checked = false;
                        this.handleChangeSelect(null, 'none');
                    }
                    this.handleClicEnlaces(null);
                }
            )
            .catch(
                (error) => {
                    window.alert(`${error.response.data.error} => No hay personaje con el ID ${this.state.TextInput}`);
                }
            )

        } else {
            if (cromo[0] !== undefined) {
                window.alert(`El ${cromo[0]} es ID de ${cromo[1]}, osea ya est\u00E1 agregado`);
            } else window.alert(`Por favor, ingrese un n\u00FAmero y que sea mayor a cero`);
        }
        //console.log(Figuritas);
    }


    aValoresIniciales = () => {
        if (document.getElementById('selec_filtro')) {
            document.getElementById('selec_filtro').value = 'none';
            document.getElementById('ascendente').checked = false;
            document.getElementById('descendente').checked = false;
            this.handleChangeSelect(null, 'none');
        }
    }
    handleClicEnlaces = (evento, page_p) => {

        //console.log(`Evento Barra:`)
        //console.log(evento)
        //console.log(page_p)

        let page = (evento !== null) ? evento.target.innerText : page_p;
        if ( page === undefined ) {
            const ruta = window.location.href;
            page = ruta.substring(ruta.lastIndexOf('/'), ruta.length);
        }

        //console.log('PAGE IS');
        //console.log(page);

        switch (page) {

            case 'HOME':
            case '/':
                //console.log('HOME');
                //console.log('myFavorites');
                //console.log(this.props.myFavorites);
                //console.log(this.state)
                //console.log(this.state.valBAdd);
                //Habilito el botón Agregar
                Object.assign(this.state, { valBAdd: false });
                this.setState(
                    { ...this.state }
                )
                //console.log(this.state.valBAdd)

                //Hago visible a la seccion Ordenes
                Object.assign(this.state,{valOrdenes:'visible'});
                this.setState(
                    { ...this.state }
                )

                //Lo siguiente resetea el filtro del género y lo del orden
                this.aValoresIniciales();

                //Oculto a la seccion Ordenes si array characters está vacío
                if (this.allCharacters.length===0 && this.state.valOrdenes==='visible') {
                    Object.assign(this.state,{valOrdenes:'hidden'});
                    this.setState(
                       { ...this.state }
                    )
                    this.aValoresIniciales();
                }//
                //console.log(this.state)
                //console.log('fin home')
                break;

            case 'ABOUT':
            case '/about':
                //console.log('ABOUT');
                //console.log(this.state)
                //console.log(this.state.valBAdd)

                //Lo siguiente inhabilita el botón Agregar ya que su funcionalidad sólo es para Cards
                Object.assign(this.state,{valBAdd:true});
                this.setState(
                    { ...this.state }
                )
                //console.log(this.state.valBAdd)

                //Oculto a la seccion Ordenes
                Object.assign(this.state,{valOrdenes:'hidden'});
                this.setState(
                    { ...this.state }
                )
                this.aValoresIniciales();
                //console.log(this.state);
                //console.log('fin about')
                break;

            case 'FAVORITOS':
            case '/favoritos':
                //console.log('FAVORITOS');

                //deshabilito el botón Agregar
                Object.assign(this.state, { valBAdd: true });
                this.setState(
                    { ...this.state }
                )

                //Hago visible a la seccion Ordenes
                Object.assign(this.state, { valOrdenes: 'visible' });
                this.setState(
                    { ...this.state }
                )

                //Lo siguiente resetea el filtro del género y lo del orden
                this.aValoresIniciales();

                //Oculto a la seccion Ordenes si array favorites está vacío
                if (this.allMyFavorites.length===0 && this.state.valOrdenes==='visible') {
                    Object.assign(this.state,{valOrdenes:'hidden'});
                    this.setState(
                       { ...this.state }
                    )
                    this.aValoresIniciales();
                }//
                break;

            default:
                //console.log('POR DEFAULT');

                //Lo siguiente inhabilita el botón Agregar ya que su funcionalidad sólo es para Cards
                Object.assign(this.state, { valBAdd: true });
                this.setState(
                    { ...this.state }
                )

                //Oculto a la seccion Ordenes
                Object.assign(this.state, { valOrdenes: 'hidden' });
                this.setState(
                    { ...this.state }
                )

                //Lo siguiente resetea el filtro del género y lo del orden
                this.aValoresIniciales();
        }
    }


    handleChangeSelect = (event, valor) => {
        //console.log(event !== null ? event.target.value : valor);

        const ruta = window.location.href;
        const page = ruta.substring(ruta.lastIndexOf('/'), ruta.length);

        // eslint-disable-next-line default-case
        switch (page) {
            case '/':
                //CASO HOME
                //Averiguo si está en true un ordenamiento, si es así ordeno
                //todo el array de los personajes
                let temp_allCharacters = [...this.allCharacters];
                if (document.getElementById('ascendente').checked
                    || document.getElementById('descendente').checked) {
                    if (document.getElementById('ascendente').checked) {
                        temp_allCharacters = temp_allCharacters.sort((first, second) => first.id - second.id);
                    } else {
                        temp_allCharacters = temp_allCharacters.sort((first, second) => second.id - first.id);
                    }
                    //console.log(event.target.value);
                }//Fin del si o no ordenamiento

                characters.splice(0, characters.length);
                this.state.Figuritas.splice(0, this.state.Figuritas.length);
                Object.assign(characters, temp_allCharacters);
                Object.assign(this.state, { Figuritas: [...characters] });
                this.setState(
                    { ...this.state }
                )
                
                
                if (document.getElementById('selec_filtro').value !== 'none') {
                    const filtroCharacters = characters.filter(
                        personaje => personaje.gender === document.getElementById('selec_filtro').value
                    );
                    //console.log(filtroCharacters);
                    characters.splice(0, characters.length);
                    Object.assign(characters, filtroCharacters);
                    Object.assign(this.state, { Figuritas: [...characters] });
                    this.setState(
                        { ...this.state }
                    )
                }
            break;

            case '/favoritos':
                
                //CASO FAVORITOS
                //Averiguo si está en true un ordenamiento, si es así ordeno
                //todo el array de myFavorites

                //console.log('this.props.allMyFavorites');
                //console.log(this.props.allMyFavorites);

                let temp_allMyFavorites = [...this.props.allMyFavorites];
                if (document.getElementById('ascendente').checked
                    || document.getElementById('descendente').checked) {
                    if (document.getElementById('ascendente').checked) {
                        temp_allMyFavorites = temp_allMyFavorites.sort((first, second) => first.id - second.id);
                    } else {
                        temp_allMyFavorites = temp_allMyFavorites.sort((first, second) => second.id - first.id);
                    }
                }//Fin del si o no ordenamiento

                //Envío dispatch que hace copiar todo lo de allMyFavorites(No Ordenado o Si) a myFavorites
                //console.log('temp_allMyFavorites');
                //console.log(temp_allMyFavorites);

                this.props.copyAllaFav(temp_allMyFavorites);

                //console.log('El select dice');
                //console.log(document.getElementById('selec_filtro').value);
                //console.log('this.props.myFavorites');
                //console.log(this.props.myFavorites);

                if (document.getElementById('selec_filtro').value !== 'none') {
                    const filtroMyFavorites = this.props.myFavorites.filter(
                        personaje => personaje.gender === document.getElementById('selec_filtro').value
                    );
                    //Envío dispatch(array filtrado) y se copie a myFavorites, 
                    //con el objetivo de un render de ese filtro pedido por select

                    this.props.copyAllaFav(filtroMyFavorites);
                }
                //Blanqueo a estado local misFavoritos
                this.state.misFavoritos.splice(0, this.state.misFavoritos.length);
                Object.assign(this.state, { misFavoritos: [...this.props.myFavorites] });
                this.setState(
                    { ...this.state }
                )
            break;
            
        }
    }

    render() {
        return (
            <div className='App' style=
                {{
                    paddingTop: valCSS.padSup,
                    backgroundImage: valCSS.urlImg,
                    backgroundSize: valCSS.bgSize
                }}>
                

                {/*SECCION ORDENES*/}
                <Ordenes id='ordenes' style={{visibility: this.state.valOrdenes}}>
                    <div style={{width: '20%'}}>
                        <label id='eti_genero'>
                        Filtrar por G&eacute;nero:
                            <div>
                                <select style={{ fontSize: '1.75vw' }} id='selec_filtro' onChange={this.handleChangeSelect}>
                                    <option value='none'>--Elige un G&#233;nero--</option>
                                    <option value='Female'>Femenino</option>
                                    <option value='Genderless'>Sin g&#233;nero</option>
                                    <option value='Male'>Masculino</option>
                                    <option value='unknown'>Desconocido</option>
                                </select>
                            </div>
                        </label>
                    </div>

                    <div style={{width: '34%'}}>
                        <label id='eti_ordenar' htmlFor='opc_orden'>
                        Ordenar por ID:
                            <div>
                                <span>
                                    <input  style={{width:'2vw',height:'2vw'}}
                                            name='opc_orden' id="ascendente" type='radio' 
                                            value='ascendente'
                                            onChange={this.handleChangeSelect}
                                    />
                                    <label htmlFor='ascendente'>Ascendente</label>
                                    <span>{' / '}</span>
                                    <label htmlFor='descendente'>Descendente</label>
                                    <input  style={{width:'2vw',height:'2vw'}} 
                                            name='opc_orden' 
                                            id="descendente" 
                                            type='radio' 
                                            value='descendente'
                                            onChange={this.handleChangeSelect}
                                    />
                                </span>
                            </div>
                        </label>
                    </div>
                </Ordenes>
                {/*FIN SECCION ORDENES*/}


                <Routes>
                
                    <Route  path = '/'
                            element =   {<Cards 
                                            characters={characters}
                                            Figuritas={this.state.Figuritas}
                                            setFiguritas={this.state.setFiguritas}
                                            state={this.state}
                                            
                                            /*setState={this.setState}*/
                                            updateState={this.updateState}
                                            
                                            handleChangeSelect={this.handleChangeSelect}
                                            allCharacters={this.allCharacters}
                                            myFavorites={this.props.myFavorites}

                                            handleClicEnlaces={this.handleClicEnlaces}
                                        />}
                    />

                    <Route  path = '/about'
                            element =   {<About
                                            state={this.state}
                                            updateState={this.updateState}
                                            handleClicEnlaces={this.handleClicEnlaces}
                                        />}
                    />
                    <Route  path = '/detail/:detailId'
                            element =   {<Detail
                                            characters={characters}
                                            state={this.state}
                                            updateState={this.updateState}
                                            handleClicEnlaces={this.handleClicEnlaces}
                                        />}
                    />

                    <Route  path = '/favoritos'
                            element =   {<Favoritos
                                            state={this.state}
                                            handleChangeSelect={this.handleChangeSelect}
                                            updateState={this.updateState}
                                            handleClicEnlaces={this.handleClicEnlaces}
                                            allMyFavorites={this.props.allMyFavorites}
                                            misFavoritos={this.state.misFavoritos}
                                        />}
                    />
                
                </Routes>

                <hr />
                <Nav 
                    onSearch={this.characterID} 
                    onChange={this.handleChange}
                    valBAdd={this.state.valBAdd}
                    handleClicEnlaces={this.handleClicEnlaces}
                />
            </div>
        );
    }
}
/* */

//Estudiante: Adalberto Monar

const mapStateToProps = (state) => {
    return {
        myFavorites: state.myFavorites,
        allMyFavorites: state.allMyFavorites
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        copyAllaFav: (NoSiOrdYOFilter_allMyFavorites) => dispatch(copyAllaFav(NoSiOrdYOFilter_allMyFavorites))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)( App );
