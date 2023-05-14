import {Component} from "react";

import Favorito from './Favorito';
import { Agrupador } from '.././css/estilos.jsx';

import { connect } from 'react-redux';


class Favoritos extends Component {

    constructor(props) {
        super(props);

        this.state = props.state;
        this.valBAdd = props.valBAdd;

        this.myFavorites = props.myFavorites;
    }

    render() {
        //deshabilito el botón Agregar
        if (this.props.state.valBAdd===false) {
            Object.assign(this.props.state,{valBAdd:true});
        }//

        return (
            <div>
                <h1>Favoritos</h1>
                <Agrupador>{
                    this.myFavorites.map(
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



const mapStateToProps = (state) => {
    return {
        myFavorites: state.myFavorites
    }
}
export default connect( mapStateToProps, null )( Favoritos );