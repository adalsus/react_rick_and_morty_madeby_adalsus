import { Face, Secc } from ".././css/estilos.jsx";
import monar from '.././img/monar.png';



const About = (props) => {

    //Lo siguiente inhabilita el botón Agregar ya que su funcionalidad sólo es para Cards
    if (props.state.valBAdd===false) {
        Object.assign(props.state,{valBAdd:true});
    }//

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