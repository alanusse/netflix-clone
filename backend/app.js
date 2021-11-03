const express = require('express')
const app = express()
const cors = require('cors')
const requireAuthentication = require('./middlewares/requireAuthentication')

// middlewares
app.use(cors())
app.use(express.json())
app.use(require('morgan')('dev'))

// routes (API v1)
app.use('/api/v1/auth', require('./routes/auth.routes'))
app.use('/api/v1/users', requireAuthentication, require('./routes/user.routes'))
app.use('/api/v1/profiles', requireAuthentication, require('./routes/profile.routes'))
app.use('/api/v1/movies', requireAuthentication, require('./routes/movie.routes'))

// error handlers
app.use(require('./middlewares/errorHandler'))
app.use(require('./middlewares/unknownEndpointHandler'))

module.exports = app
