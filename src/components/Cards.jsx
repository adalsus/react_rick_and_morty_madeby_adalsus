import React from "react";
import Card from './Card';
import {Agrupador} from '../css/estilos.jsx';
import {fn_retIndex} from '../js/fns/fnsApp.js';

class Cards extends React.Component {
   constructor(props) {
      super(props);
      this.characters = props.characters;
      this.Figuritas = props.Figuritas;
      this.setFiguritas = props.setFiguritas;
   }

   render() {
      const bXcard = (e) => {
         //window.alert('Emulamos que se cierra la card');
         const idAexc = (e.target.classList[2])-0;
         let posID = fn_retIndex(idAexc, this.characters);
         this.characters.splice(posID,1);
         this.Figuritas.splice(posID,1);
         this.setFiguritas(this.characters.map( (elem,i) => this.Figuritas[i]=elem ));
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
                     />
                  )
               }
            )
         }</Agrupador>
      );
   }
}

export default Cards;