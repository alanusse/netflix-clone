const express = require('express')
const app = express()

// middlewares
app.use(express.json())
app.use(require('morgan')('dev'))

// routes
app.use('/v1/auth', require('./routes/auth.routes'))

// error handlers
app.use(require('./middlewares/errorHandler'))
app.use(require('./middlewares/unknownEndpointHandler'))

module.exports = app
