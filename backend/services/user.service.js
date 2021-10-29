const User = require('../models/user')
const userService = {
  createUser: (email, password) => {
    const user = new User({ email, password })
    return user.save()
  }
}

module.exports = userService
