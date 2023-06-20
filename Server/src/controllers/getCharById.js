const axios = require('axios')
const URL_BASE = 'https://rickandmortyapi.com/api/character/'

const getCharById = (req_p, res_p) => {
    const id_p = req_p.params.id
    //console.log(URL_BASE + id_p)
    let personaje = {}
    axios(URL_BASE + id_p)
    .then(function(response) {
        // handle success
        Object.assign(personaje, response.data) 
        //console.log(personaje);
        //application/json
        res_p.json(personaje)
    })
    .catch(err => {
        //console.log(err)
        let fallo = {
            'error': (err.response.status===404)?'Personaje no encontrado':'Ruta Incorrecta'
        }
        res_p.status(err.response.status).json(fallo)
    })
}

module.exports = { getCharById }