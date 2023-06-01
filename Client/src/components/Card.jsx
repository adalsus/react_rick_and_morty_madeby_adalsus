import React from "react";

import { FondoCard, Caricatura, Letras, BtnXcard, UpIMG, BtnFAVcard, DID } from ".././css/estilos.js";
import { Link } from "react-router-dom";

import { addFav, removeFav } from '../redux/actions.js';
import { connect } from 'react-redux';

import { fn_hayID } from '../js/fns/fnsApp.js';

//FORMA CON FUNCTION <-- Falta actualizarla
/* 
function Card(props) {
    return (
        <FondoCard id={props.campos.id} key={props.campos.id} className={props.campos.name}>
            <BtnXcard onClick={props.onClose} className={props.campos.id}>X</BtnXcard>
            <Letras><Link to={`/detail/${this.campos.id}`}>{props.campos.name.substr(0,25)}</Link></Letras>
            <Letras>{props.campos.species}</Letras>
            <Letras>{props.campos.gender}</Letras>
            <Link to={`/detail/${this.campos.id}`}><Caricatura src={props.campos.image} alt={props.campos.name} /></Link>
        </FondoCard>
    );
}
/* */

//FORMA CON CLASS
/* */
class Card extends React.Component {
    constructor(props) {
        super(props);
        this.campos = props.campos;
        this.onClose = props.onClose;
        this.addFav = props.addFav;
        this.removeFav = props.removeFav;
        this.myFavorites = props.myFavorites;
        this.handleClicEnlaces = props.handleClicEnlaces;
    }

    state = {
        isFav: false
    }
    handleFavorite = (e) => {
        const hayID = fn_hayID(e.target.name-0, this.myFavorites)[0];
        if (this.state.isFav === false && hayID === undefined) {
            /*this.setState(
                (() => { Object.assign(this.state, { isFav: true }) })
            )*/
            Object.assign(this.state, { isFav: true });
            this.setState(
                { ...this.state }
            )
            
            //console.log(this.campos);
            this.addFav(this.campos);
        } else {
            /*this.setState(
                (() => { Object.assign(this.state, { isFav: false }) })
            )*/
            Object.assign(this.state, { isFav: false });
            this.setState(
                { ...this.state }
            )
            //console.log(e.target.name-0)
            this.removeFav(e.target.name - 0);
        }
        let flag = document.getElementById(`btn${e.target.name}`);
        if (flag.textContent==='⚐') {
            flag.textContent = '⚑';
        } else flag.textContent = '⚐';
    }


    render() {
        return (
            <FondoCard id={this.campos.id} key={this.campos.id} className={this.campos.name}>
                <BtnXcard onClick={this.onClose} className={this.campos.id}>X</BtnXcard>
                <Letras><Link to={`/detail/${this.campos.id}`} onClick={this.props.handleClicEnlaces}>
                    {this.campos.name.substr(0,25)}
                </Link></Letras>
                <Letras>{this.campos.species}</Letras>
                <Letras>{this.campos.gender}</Letras>
                {   
                    /*(this.state.isFav) ? (
                        <BtnFAVcard onClick={this.handleFavorite}>⚑</BtnFAVcard>
                    ) : (
                        <BtnFAVcard onClick={this.handleFavorite}>⚐</BtnFAVcard>
                    )*/
                }
                <UpIMG>
                    <BtnFAVcard onClick={this.handleFavorite} name={this.campos.id} id={`btn${this.campos.id}`}>
                        {(fn_hayID(this.campos.id-0, this.myFavorites)[0]) ? '⚑' : '⚐' }
                    </BtnFAVcard>
                    <DID>
                        {`ID: ${this.campos.id}`}
                    </DID>
                </UpIMG>
                <Link to={`/detail/${this.campos.id}`} onClick={this.props.handleClicEnlaces}>
                    <Caricatura src={this.campos.image} alt={this.campos.name} />
                </Link>
            </FondoCard>
        );
    }
}
/* */


/*const mapStateToProps = (state) => {
    return {
        myFavorites: state.myFavorites
    }
}*/
const mapDispatchToProps = (dispatch) => {
    return {
        addFav: (personaje) => dispatch(addFav(personaje)),
        removeFav: (id) => dispatch(removeFav(id))
    }
}
export default connect( /*mapStateToProps*/null, mapDispatchToProps )( Card );