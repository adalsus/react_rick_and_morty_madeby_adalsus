import { Face, Secc } from ".././css/estilos.jsx";
import monar from '.././img/monar.png';


const About = () => {
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
}

export default About;