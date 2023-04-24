import React from "react";

import { FondoCard, Caricatura, Letras, BtnXcard } from ".././css/estilos.jsx";


//FORMA CON FUNCTION
/* 
function Card(props) {
    return (
        <FondoCard id={props.campos.id} key={props.campos.id} className={props.campos.name}>
            <BtnXcard onClick={props.onClose} className={props.campos.id}>X</BtnXcard>
            <Letras>{props.campos.name.substr(0,25)}</Letras>
            <Letras>{props.campos.species}</Letras>
            <Letras>{props.campos.gender}</Letras>
            <Caricatura src={props.campos.image} alt={props.campos.name} />
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
    }
    render() {
        return (
            <FondoCard id={this.campos.id} key={this.campos.id} className={this.campos.name}>
                <BtnXcard onClick={this.onClose} className={this.campos.id}>X</BtnXcard>
                <Letras>{this.campos.name.substr(0,25)}</Letras>
                <Letras>{this.campos.species}</Letras>
                <Letras>{this.campos.gender}</Letras>
                <Caricatura src={this.campos.image} alt={this.campos.name} />
            </FondoCard>
        );
    }
}
/* */

export default Card;