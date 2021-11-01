const config = require('../utils/config')
const jwt = require('jsonwebtoken')
const CustomError = require('../errors/CustomError')

const extractToken = authorization => (
  typeof authorization === 'string'
    ? authorization.slice(7)
    : 'Bearer'
)

module.exports = (req, res, next) => {
  const authToken = req.get('authorization')

  try {
    const payload = jwt.verify(extractToken(authToken), config.JWT_SECRET)
    req.userId = payload.id
    return next()
  } catch (err) {
    throw new CustomError(401, 'Authorization token is missing or invalid.')
  }
}
