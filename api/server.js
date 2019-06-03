const express = require('express')
const helmet = require('helmet')
const logger = require('morgan')

// Import resource routes

// Instantiate server
const server = express()

// Load middleware
server.use(helmet())
server.use(express.json())
server.use(logger('dev'))

// Activate routes
server.use('/', (req, res) => {
  res.send(`<h1>Welcome to the Projects App API server</h1>`)
})

module.exports = server