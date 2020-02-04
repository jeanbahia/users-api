const express = require('express')
const routes = express.Router()
const UserController = require('./controller/UserController')

routes.get('/', UserController.find)

module.exports = routes

