const config = require('../utils/config')
const User = require('../models/user')
const passwordMethods = require('../utils/passwordMethods')
const jwt = require('jsonwebtoken')

const userService = {
  ERROR_NAMES: {
    USER_NOT_FOUND: 'USER_NOT_FOUND',
    INVALID_USER_PASSWORD: 'INVALID_USER_PASSWORD'
  },

  signup: async function (email, password) {
    const user = new User({ email, password })
    await user.save()
    return user
  },

  signin: async function (email, password) {
    const user = await User.findOne({ email })

    if (!user) return { failed: true, error: this.ERROR_NAMES.USER_NOT_FOUND }
    if (!passwordMethods.compare(password, user.password)) return { failed: true, error: this.ERROR_NAMES.INVALID_USER_PASSWORD }

    const payloadToSign = {
      id: user.id,
      email: user.email
    }

    const token = jwt.sign(payloadToSign, config.JWT_SECRET, { expiresIn: config.JWT_EXPIRY_TIME })

    return {
      id: user.id,
      email: user.email,
      token
    }
  },

  getUserById: async function (id) {
    const user = await User.findById(id)

    if (!user) return { failed: true, error: this.ERROR_NAMES.USER_NOT_FOUND }

    return user
  }
}

module.exports = userService
