const express = require('express')
const helmet = require('helmet')
const cors = require('cors')
const logger = require('morgan')

// Import resource routes
const projectRoutes = require('../routes/projectRoutes')
const actionRoutes = require('../routes/actionRoutes')

// Instantiate server
const server = express()

//==== Global middleware ==== //
const validateProjectId = require('../middleware')
server.use(helmet())
server.use(cors())
server.use(express.json())
server.use(logger('dev'))

// Activate routes
server.use(`/api/projects`, projectRoutes)
server.use(`/api/projects/:id/actions`, validateProjectId, actionRoutes)
server.use('/', (req, res) => {
  res.send(`<h1>Welcome to the Projects App API server</h1>`)
})

module.exports = server