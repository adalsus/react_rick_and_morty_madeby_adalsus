import logo from './logo.svg';
import './Intro.css';

function Intro() {
  return (
       <div className="Intro">
          <header className="Intro-header">
            <img src={logo} className="Intro-logo" alt="logo" />
              <p className="rAm">Rick and Morty.- Sean BIENVENIDOS!!!</p>
          </header>
       </div>
  );
}

//Estudiante: Adalberto Monar devFT-37b


export default Intro;
