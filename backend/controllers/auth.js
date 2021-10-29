const userService = require('../services/user.service')

const controller = {
  registerUser: (req, res, next) => {
    const { email, password } = req.body

    userService.createUser(email, password)
      .then(user => res.status(201).json(user))
      .catch(error => next(error))
  }
}

module.exports = controller
