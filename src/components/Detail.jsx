//import { Component } from "react";

import { useParams } from "react-router-dom";
import { DetalleCard, Caricatura, Letras } from ".././css/estilos.jsx";


//FORMA CON FUNCTION
/* */
function Detail(props) {
  
  const { detailId } = useParams({})
  const [ cromo ] = props.characters.filter( elem => elem.id === detailId-0 );
  //console.log(cromo);
  
  //Lo siguiente inhabilita el bot�n Agregar ya que su funcionalidad s�lo es para Cards
  if (props.state.valBAdd===false) {
    Object.assign(props.state,{valBAdd:true});
  }//
 
  return ( 
      <div>
        <h1>Card Detail</h1>
        <h2>{cromo.name}</h2>
        <DetalleCard>
          <Letras>ID: {cromo.id}</Letras>
          <Letras>STATUS: {cromo.status}</Letras>
          <Letras>GENDER: {cromo.gender}</Letras>
          <Letras>ORIGIN: {cromo.origin.name}</Letras>
          <Caricatura src={cromo.image} alt={cromo.species} />
        </DetalleCard>
      </div>
  );
}
/* */



//FORMA CON CLASS

/* A�n falta encontrar el hom�logo del useParams en class component
class Detail extends Component {
    render() {
        const { detailId } = useParams({})
        const [ cromo ] = this.props.characters.filter( elem => elem.id === detailId-0 );
        //console.log(cromo);

        return (
            <div>
                <h1>Card Detail</h1>
                <h2>{cromo.name}</h2>
                <DetalleCard>
                    <Letras>ID: {cromo.id}</Letras>
                    <Letras>STATUS: {cromo.status}</Letras>
                    <Letras>GENDER: {cromo.gender}</Letras>
                    <Letras>ORIGIN: {cromo.origin.name}</Letras>
                    <Caricatura src={cromo.image} alt={cromo.species} />
                </DetalleCard>
            </div>
        );
    }
}
/* */


export default Detail;