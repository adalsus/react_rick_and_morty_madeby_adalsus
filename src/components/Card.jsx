import React from "react";

import {FondoCard, Caricatura, Letras, BtnXcard} from "../css/estilos.jsx";


class Card extends React.Component {
   constructor(props) {
      super(props);
      this.campos = props.campos;
      this.onClose = props.onClose;
   }
   render() {
      return (
         <FondoCard key={this.campos.id} className={this.campos.name}>
            <BtnXcard onClick={this.onClose} className={this.campos.id}>X</BtnXcard>
            <Letras>{this.campos.name}</Letras>
            <Letras>{this.campos.species}</Letras>
            <Letras>{this.campos.gender}</Letras>
            <Caricatura src={this.campos.image} alt={this.campos.name} />
         </FondoCard>
      );
   }
}

export default Card;

