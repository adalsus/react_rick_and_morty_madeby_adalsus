import React from "react";

class Card extends React.Component {
   constructor(props) {
      super(props);
      this.campos = props.campos;
      this.onClose = props.onClose;
   }
   render() {
      return (
         <div id={this.campos.id}>
            <button onClick={this.onClose}>X</button>
            <h2>{this.campos.name}</h2>
            <h2>{this.campos.species}</h2>
            <h2>{this.campos.gender}</h2>
            <img src={this.campos.image} alt={this.campos.name} />
         </div>
      );
   }
}

export default Card;