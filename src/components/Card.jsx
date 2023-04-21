import React from "react";

import { FondoCard, Caricatura, Letras, BtnXcard } from "../css/estilos.jsx";

export default class Card extends React.Component {
    constructor(props) {
        super(props);
        this.campos = props.campos;
        this.onClose = props.onClose;
    }
    render() {
        return (
            <FondoCard id={this.campos.id}>
                <BtnXcard onClick={this.onClose}>X</BtnXcard>
                <Letras>{this.campos.name}</Letras>
                <Letras>{this.campos.species}</Letras>
                <Letras>{this.campos.gender}</Letras>
                {/*<h2></h2>
                <h2></h2>*/}
                <Caricatura src={this.campos.image} alt={this.campos.name} />
            </FondoCard>
        );
    }
}
