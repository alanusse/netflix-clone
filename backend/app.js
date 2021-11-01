const express = require('express')
const app = express()

// middlewares
app.use(express.json())
app.use(require('morgan')('dev'))

// routes (API v1)
app.use('/api/v1/auth', require('./routes/auth.routes'))
app.use('/api/v1/users', require('./routes/user.routes'))
app.use('/api/v1/profiles', require('./routes/profile.routes'))

// error handlers
app.use(require('./middlewares/errorHandler'))
app.use(require('./middlewares/unknownEndpointHandler'))

module.exports = app
