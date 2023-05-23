import React from 'react';
import ReactDOM from 'react-dom/client';

import { BrowserRouter } from "react-router-dom";

import Intro from './Intro.jsx';
import App from './App.jsx';

import { Login } from "./css/estilos.js";
import { credentials } from './js/credenciales'
import { fn_deco } from './js/fns/fnsApp';

import background_to_Form from './img/Background_to_Form.jpg'
import { Campos } from "./css/estilos.js";

import { asignarA } from './js/fns/fnsApp.js';
import { characters } from './data.js'

import { Provider } from 'react-redux';
import store from './redux/store.js';

const root = () => {


    //Configuración por defecto
    //conPersonajesRandom = 'si' para asignar Personajes Random
    const conPersonajesRandom = 'si';
    if (conPersonajesRandom === 'si') asignarA(characters);
    //Configuración


    const root = ReactDOM.createRoot(document.getElementById('root'));
    root.render(<Intro />);


    function inicie() {
        root.render(
            <Provider store={store}>
                <BrowserRouter>
                    <App />
                </BrowserRouter>
            </Provider>
        );
    }
    setInterval(inicie, 2400);

    //Adalberto Monar

}


/*
let emailNow = '';
do {
    alert(fn_deco(credentials.admin.email));
    emailNow = prompt('Escribe tu e-mail', '');
    console.log(emailNow);
} while ( emailNow !== fn_deco(credentials.admin.email) );
*/
const Form = () => {
    function handleSubmit(e) {
        // Prevent the browser from reloading the page
        e.preventDefault();

        // Read e.target
        const form = e.target;
        
        //const formData = new FormData(form);
        // You can pass formData as a fetch body directly:
        //fetch('/some-api', { method: form.method, body: formData });

        // Or you can work with it as a plain object:
        //const formJson = Object.fromEntries(formData.entries());
        //console.log(formJson);

        //console.log(form['0'].value);
        //console.log(form['1'].value);
        if (form['0'].value === fn_deco(credentials.admin.email)
            & form['1'].value === fn_deco(credentials.admin.password)) {
            const div_temp_root = document.getElementById("temp_root");
            div_temp_root.remove();
            //alert('Ingreso autorizado');

            root();
        } else {
            alert('Por favor, ingrese una Credencial autorizada ...');
        }
    }
    return (
        <Login 
            style=
                {{
                    backgroundImage: `url(${background_to_Form})`,
                    backgroundSize: '100%'
                }}
            className='formulario' 
            onSubmit={handleSubmit}
        >   
            <h3 style={{ color: '#12dccf' }}>LOGIN</h3>
            <div>
                <Campos>
                    Correo-e&nbsp;&nbsp;&nbsp;&nbsp;:&nbsp;
                    <input 
                        type='email' 
                        name='login_e-mail' 
                        defaultValue={fn_deco(credentials.admin.email)} 
                        required={true} 
                    />
                </Campos>
                <div></div>
                <Campos>
                    Contraseña:&nbsp;
                    <input 
                        type='password' 
                        name='login_contraseña' 
                        defaultValue={fn_deco(credentials.admin.password)} 
                        required={true} 
                    />
                </Campos>
            </div>
            <hr/>
            <div>
                <button 
                    style={{ width:'120px', height:'30px' }}
                    type='reset'
                >
                    Reset form
                </button>
                <button 
                    style={{ width: '120px', height:'30px' }}
                    type='submit'
                >
                    Submit form
                </button>
            </div>
        </Login>
    );
};//Estudiante: Adalberto Monar

export default Form;