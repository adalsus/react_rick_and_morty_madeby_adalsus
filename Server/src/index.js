const http = require('http')
const hostname = 'localhost'
const PORT = 3001

const server = http.createServer(
    (req, res) => {
        res.setHeader('Access-Control-Allow-Origin', '*');
        let item, fallo, valueID
        if (req.url.startsWith('/rickandmorty/character/')) {
            valueID = req.url.replace('/rickandmorty/character/', '') - 0 
            const data = require('./utils/data.js')
            item = data.find(elem => elem.id === valueID)
            //console.log(item)
            if (item!==undefined) {
                //application/json
                res.writeHead(200, {'Content-Type': 'application/json'})
                //JSON.stringify
                res.write(JSON.stringify(item))
            }
        }
        if (item === undefined) {
            //new TypeError('Ruta inválida')
            fallo = {
                'error': (isNaN(valueID)||valueID===undefined)?'Ruta inválida':'Personaje no encontrado'
            }
            res.writeHead(404, {'Content-Type': 'application/json'})
            res.write(JSON.stringify(fallo))
        } 

        res.end()
    }	  
)

server.listen(
    PORT,
    hostname, 
    () => console.log(`Server running at http://${hostname}:${PORT}`)
)