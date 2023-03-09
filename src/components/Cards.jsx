import React from "react";

import Card from './Card';

class Cards extends React.Component {
   constructor(props) {
      super(props);
      this.personajes = props.characters;
   }
   render() {
      return (
         this.personajes.map(
            (personaje) => {
               return (
                  <Card
                     campos={personaje}
                     onClose={() => window.alert('Emulamos que se cierra la card')}
                  />
               )
            }
         )
      )   
   }
}

export default Cards;