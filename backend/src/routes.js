const express = require('express')
const routes = express.Router()
const connection = require('./database/connection')
const OngController = require('./controllers/OngController')
const IncidentController = require('./controllers/incidentController')
const ProfileController = require('./controllers/ProfileController')
const SessionController = require('./controllers/SessionController')

//Rotas de ong's

routes.get('/ongs' , OngController.index)

routes.post('/ongs', OngController.create)

//Rotas profile

routes.get('/profile', ProfileController.index)

//Rotas de sessão

routes.post('/sessions', SessionController.create)

//Rotas de casos

routes.get('/incidents', IncidentController.index)

routes.post('/incidents', IncidentController.create)

routes.delete('/incidents/:id', IncidentController.delete)

module.exports = routes;