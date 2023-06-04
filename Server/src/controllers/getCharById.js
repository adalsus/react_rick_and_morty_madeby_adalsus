const axios = require('axios')
const URL_BASE = 'https://rickandmortyapi.com/api/character/'

const getCharById = (res_p, id_p) => {
    //console.log(URL_BASE + id_p)
    let personaje = {}
    axios(URL_BASE + id_p)
    .then(function(response) {
        // handle success
        Object.assign(personaje, response.data) 
        //console.log(personaje);
        //application/json
        res_p.writeHead(200, { 'Content-Type': 'application/json' })
        //JSON.stringify
        res_p.write(JSON.stringify(personaje))
        res_p.end()
    })
    .catch((err) => {
        //console.log(err)
        fallo = {
            'error': (err.response.status===404)?'Personaje no encontrado':'Ruta Incorrecta'
        }
        res_p.writeHead(404, { 'Content-Type': 'application/json' })
        res_p.write(JSON.stringify(fallo))
        res_p.end()
    })
}

module.exports = { getCharById }