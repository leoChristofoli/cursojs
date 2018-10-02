const port = 3003

const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const db = require('./db')

app.use(bodyParser.urlencoded({ extended: true }))

app.get('/produtos', (req, res, next) => {
    console.log('Middleware 1...')
    next()
})

app.get('/produtos', (req, res, next) => {
    res.send(db.getProdutos()) // Converte para JSON
})

app.get('/produtos/:id', (req, res, next) => {
    res.send(db.getProduto(req.params.id))
})

app.post('/produtos', (req, res, next) => {
    const produto = db.salvarProduto({
        nome: req.body.nome,
        preco: req.body.preco
    })
    res.send(produto)
})

app.put('/produtos/:id', (req, res, next) => {
    const produto = db.salvarProduto({
        id: req.params.id,
        nome: req.body.nome,
        preco: req.body.preco
    })
    res.send(produto)
})

app.delete('/produtos/:id', (req, res, next) => {
    const produto = db.excluirProduto(req.params.id)
    res.send(produto)
})

app.listen(port, () => {
    console.log(`Listening to port ${port}`)
})