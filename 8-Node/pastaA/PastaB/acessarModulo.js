const var1 = require('../../120-ModuloB') // Linux é case sensitive

console.log(var1.boaNoite())

const c = require('./pastaC')
console.log(c.ola)

const http = require('http')
http.createServer((req, res) =>{
    console.log(req)
    res.write('Bom dia!')
    res.end()
}).listen(8080)