const http = require('http')
const hostname = 'localhost'
const PORT = 3001

const { getCharById } = require('./controllers/getCharById.js')


const server = http.createServer(
    (req, res) => {
        res.setHeader('Access-Control-Allow-Origin', '*');
        //console.log(req.url)
        let personaje, fallo, valueID
        if (req.url.startsWith('/rickandmorty/character/')) {
            valueID = req.url.replace('/rickandmorty/character/', '') - 0 
            //console.log(valueID)

            /*//personaje(item) desde array data.js
            const data = require('./utils/data.js')
            personaje = data.find(elem => elem.id === valueID)
            //fin personaje desde array*/

            //personaje desde API https://rickandmortyapi.com/api/character/
            getCharById(res,valueID)
            //fin proceso personaje desde API

        } else {
            //new TypeError('Ruta inválida')
            fallo = {
                'error': 'Ruta inválida'
            }
            res.writeHead(404, {'Content-Type': 'application/json'})
            res.write(JSON.stringify(fallo))
            res.end()
        } 
    }	  
)

server.listen(
    PORT,
    hostname, 
    () => console.log(`Server running at http://${hostname}:${PORT}`)
)