import React from "react";

import { FondoCard, Caricatura, Letras, BtnXcard } from ".././css/estilos.jsx";
import { Link } from "react-router-dom";


//FORMA CON FUNCTION
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
    }
    render() {
        return (
            <FondoCard id={this.campos.id} key={this.campos.id} className={this.campos.name}>
                <BtnXcard onClick={this.onClose} className={this.campos.id}>X</BtnXcard>
                <Letras><Link to={`/detail/${this.campos.id}`}>
                    {this.campos.name.substr(0,25)}
                </Link></Letras>
                <Letras>{this.campos.species}</Letras>
                <Letras>{this.campos.gender}</Letras>
                <Link to={`/detail/${this.campos.id}`}>
                    <Caricatura src={this.campos.image} alt={this.campos.name} />
                </Link>
            </FondoCard>
        );
    }
}
/* */

export default Card;