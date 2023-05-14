import { Component } from "react";

import { FondoCard, Caricatura, Letras } from ".././css/estilos.jsx";
import { Link } from "react-router-dom";


class Favorito extends Component {

    constructor(props) {
        super(props);
        this.campos = props.campos;
    }

    render() {
        return (
            <FondoCard style={{ backgroundColor: '#FF0087' }} id={this.campos.id} key={this.campos.id} className={this.campos.name}>
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
}//Estudiante: Adalberto Monar


export default Favorito;