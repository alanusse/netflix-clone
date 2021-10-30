const config = require('../utils/config')
const User = require('../models/user')
const passwordMethods = require('../utils/passwordMethods')
const jwt = require('jsonwebtoken')

const userService = {
  ERROR_NAMES: {
    USER_NOT_FOUND: 'USER_NOT_FOUND',
    INVALID_USER_PASSWORD: 'INVALID_USER_PASSWORD'
  },

  signup: function (email, password) {
    const user = new User({ email, password })
    return user.save()
  },

  signin: async function (email, password) {
    const user = await User.findOne({ email })

    if (!user) return { failed: true, error: this.ERROR_NAMES.USER_NOT_FOUND }
    if (!passwordMethods.compare(password, user.password)) return { failed: true, error: this.ERROR_NAMES.INVALID_USER_PASSWORD }

    const payloadToSign = {
      id: user.id,
      email: user.email
    }

    const token = jwt.sign(payloadToSign, config.JWT_SECRET, { expiresIn: '12h' })

    return {
      token
    }
  }
}

module.exports = userService
