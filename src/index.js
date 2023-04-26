import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Intro from './Intro.jsx';
import App from './App.jsx';
import reportWebVitals from './reportWebVitals'

import { BrowserRouter } from "react-router-dom";


//Configuración por defecto
//conPersonajesRandom = 'si' para asignar Personajes Random
import { asignarA } from './js/fns/fnsApp.js';
import { characters } from './data.js'
const conPersonajesRandom = 'si';
if (conPersonajesRandom === 'si') asignarA(characters);
//Configuración


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Intro />);

function inicie() {
    root.render(
        <BrowserRouter>
            <App />
        </BrowserRouter>
    );
}
setInterval(inicie, 2400);


//Adalberto Monar


/*if (module.hot) {
  module.hot.accept();
}*/


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

reportWebVitals();