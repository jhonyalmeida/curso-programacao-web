const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const Chamados = require('./Chamados')

const app = express()
app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

app.get('/chamados', (request, response) => {
    return response.json(Chamados.findAll())
})

app.get('/chamados/:id', (request, response) => {
    const chamado = Chamados.find(parseInt(request.params.id))
    return response.json(chamado)
})

app.post('/chamados', (request, response) => {
    const chamado = request.body
    Chamados.create(chamado)
    return response.json(chamado)
})

app.listen(8000, () => {
    console.log('App is running!')
})