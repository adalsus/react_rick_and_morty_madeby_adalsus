import React from "react";

import Card from './Card';
import { Agrupador } from '../css/estilos.jsx';

export default class Cards extends React.Component {
    constructor(props) {
        super(props);
        this.personajes = props.characters;
    }
    render() {
        return (
            <Agrupador>{
                this.personajes.map(
                    (personaje) => {
                        return (
                            <Card
                                key={personaje.id}
                                campos={personaje}
                                onClose={() => window.alert('Emulamos que se cierra la card')}
                            />
                        )
                    }
                )
            }</Agrupador>
        );
    }
}
