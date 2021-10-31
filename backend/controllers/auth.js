const userService = require('../services/user.service')
const CustomError = require('../errors/CustomError')
const responseTemplate = require('../utils/responseTemplate')

const controller = {
  registerUser: (req, res, next) => {
    const { email, password } = req.body

    userService.signup(email, password)
      .then(user => res.status(201).json(user))
      .catch(error => next(error))
  },

  loginUser: async (req, res, next) => {
    const { email, password } = req.body

    try {
      const user = await userService.signin(email, password)

      if (user.failed) {
        if (user.error === userService.ERROR_NAMES.USER_NOT_FOUND || user.error === userService.ERROR_NAMES.INVALID_USER_PASSWORD) {
          throw new CustomError(401, 'Email or password is invalid.')
        }

        return next(user)
      }

      return res
        .status(200)
        .json(responseTemplate(200, {
          authenticationToken: user.token
        }))
    } catch (error) {
      return next(error)
    }
  }
}

module.exports = controller
