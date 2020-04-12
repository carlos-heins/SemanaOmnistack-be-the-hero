const express = require('express')
const routes = require('./routes')
const cors = require('cors')
const port = 3333
const app = express()
app.use(express.json())
app.use(cors())

app.use(routes)


app.listen(port)
console.log('Servidor rodando na porta: '+ port)