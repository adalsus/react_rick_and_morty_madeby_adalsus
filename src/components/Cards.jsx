import React from "react";

import Card from './Card';
import { Agrupador } from '.././css/estilos.js';
import { fn_retIndex } from '.././js/fns/fnsApp.js';

//Estas importaciones son para poder eliminarlo también
//de Favoritos en caso de darle al botón X
import { removeFav } from '../redux/actions.js';
import { connect } from 'react-redux';
import { fn_hayID } from '../js/fns/fnsApp.js';


//FORMA CON FUNCTION  <-- Falta actualizarla
/* 
function Cards(props) {
    const bXcard = (e) => {
        //window.alert('Emulamos que se cierra la card');
        const idAexc = (e.target.classList[2]) - 0;
        let posID = fn_retIndex(idAexc, props.characters);
        props.characters.splice(posID, 1);
        props.Figuritas.splice(posID, 1);
        props.setFiguritas(props.characters.map((elem, i) => props.Figuritas[i] = elem));
    }
    return (
        <Agrupador>{
            props.characters.map(
                (personaje, index) => {
                    return (
                        <Card
                            key={personaje.id}
                            id={personaje.index}
                            campos={personaje}
                            onClose={bXcard}
                        />
                    )
                }
            )
        }</Agrupador>
    );
}
/* */


//FORMA CON CLASS
/* */
class Cards extends React.Component {

    constructor(props) {
        super(props);

        this.characters = props.characters;

        this.state = props.state;
        //this.setState = props.setState;
        this.updateState = props.updateState;

        this.Figuritas = props.Figuritas;
        this.setFiguritas = props.setFiguritas;
        this.valBAdd = props.valBAdd;

        this.myFavorites = props.myFavorites;
        
        //Para eliminarlo también de favoritos en caso de darle en boton X
        this.removeFav = props.removeFav;

        this.handleChangeSelect = props.handleChangeSelect;

        this.allCharacters = props.allCharacters;

        this.handleClicEnlaces = props.handleClicEnlaces;
    }


    render() {

        const bXcard = (e) => {
            //window.alert('Emulamos que se cierra la card');
            const idAexc = (e.target.classList[2]) - 0;
            let posID = fn_retIndex(idAexc, this.props.characters);
            this.props.characters.splice(posID, 1);
            posID = fn_retIndex(idAexc, this.props.Figuritas);
            this.props.Figuritas.splice(posID, 1);
            //this.setFiguritas(this.characters.map((elem, i) => this.Figuritas[i] = elem));  <--DESCOMENTE SI APP ESTÁ COMO FUNCTION

            this.props.updateState( 'Figuritas',[...this.props.characters] )

            //Eliminarlo también de allCharacters
            posID = fn_retIndex(idAexc, this.props.allCharacters);
            this.props.allCharacters.splice(posID, 1);

            //Eliminarlo también de Favoritos
            let hayID = fn_hayID(idAexc, this.props.myFavorites)[0];
            if (hayID!==undefined) {
                this.props.removeFav(hayID-0);
            }

            //console.log(`TAMA\u00D1O allCharacters = ${this.props.allCharacters.length}`);
            if (this.props.allCharacters.length === 0) { this.props.handleClicEnlaces(null); }
        }

        return (
            <Agrupador>{
                this.characters.map(
                    (personaje,index) => {
                        return (
                            <Card
                                key={personaje.id}
                                id={personaje.index}
                                campos={personaje}
                                onClose={bXcard}
                                myFavorites={this.props.myFavorites}
                                updateState={this.props.updateState}
                                handleClicEnlaces={this.props.handleClicEnlaces}
                            />
                        )
                    }
                )
            }</Agrupador>
        );
    }
}//Estudiante: Adalberto Monar
/* */



/*const mapStateToProps = (state) => {
    return {
        myFavorites: state.myFavorites
    }
}*/
const mapDispatchToProps = (dispatch) => {
    return {
        removeFav: (id) => dispatch(removeFav(id))
    }
}
export default connect( /*mapStateToProps*/null, mapDispatchToProps )( Cards );