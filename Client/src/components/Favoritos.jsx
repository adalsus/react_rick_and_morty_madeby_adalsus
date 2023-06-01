import {Component} from "react";

import Favorito from './Favorito';
import { Agrupador } from '.././css/estilos.js';

//import { connect } from 'react-redux';


class Favoritos extends Component {

    constructor(props) {
        super(props);

        this.state = props.state;
        this.valBAdd = props.valBAdd;

        this.updateState = props.updateState;

        this.misFavoritos = props.misFavoritos;

        this.handleChangeSelect = props.handleChangeSelect;

        //this.app_allMyFavorites = props.app_allMyFavorites;
        this.allMyFavorites = props.allMyFavorites;

        this.handleClicEnlaces = props.handleClicEnlaces;
    }

    componentDidMount() {
        //Llamo a este método a lo que se monta o carga este componente
        this.handleClicEnlaces(null, 'FAVORITOS');
    }
    componentWillUnmount() {
        //Llamo a este método a lo que se desmonta o se sale de este componente
        this.handleClicEnlaces(null);
    }

    
    render() {
        //console.log('ENTRA A COMPONENTE FAVORITOS');
        //console.log(this.props.misFavoritos);

        return (
            <div>
                <h1>Favoritos</h1>
                <Agrupador>{
                    this.props.misFavoritos.map(
                        (personaje,index) => {
                            return (
                                <Favorito
                                    key={personaje.id}
                                    id={personaje.index}
                                    campos={personaje}
                                />
                            )
                        }
                    )
                }</Agrupador>
            </div>
        );
    }
}//Estudiante: Adalberto Monar



/*const mapStateToProps = (state) => {
    return {
        myFavorites: state.myFavorites
    }
}*/
export default /*connect( mapStateToProps, null )( */Favoritos/* )*/;