import { Face, Secc } from ".././css/estilos.js";
import monar from '.././img/monar.png';

import { useLayoutEffect } from 'react';

const About = (props) => {

    useLayoutEffect(() => {
        //Cuando se monte cargue ruta actual
        props.handleClicEnlaces(null);

        //Cuando se desmonte cargue ruta anterior
        return () => {
            props.handleClicEnlaces(null);
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <div>
            <h1>About</h1>

            <div>
                <Secc>
                    <h2>Adalberto Monar</h2>
                    <Face src={monar} alt="ADALSUS" />
                </Secc>
            </div>

        </div>
    );
}//Estudiante: Adalberto Monar

export default About;