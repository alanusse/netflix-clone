const userService = require('../services/user.service')
const CustomError = require('../errors/CustomError')
const responseTemplate = require('../utils/responseTemplate')

const errorHandler = (next, data) => {
  switch (data.error) {
    case userService.ERROR_NAMES.USER_NOT_FOUND:
    case userService.ERROR_NAMES.INVALID_USER_PASSWORD:
      throw new CustomError(401, 'Email or password is invalid.')

    default:
      return next(data)
  }
}

const controller = {
  registerUser: async (req, res, next) => {
    const { email, password } = req.body

    try {
      const user = await userService.signup(email, password)
      return res
        .status(201)
        .json(responseTemplate({
          status: 201,
          data: user
        }))
    } catch (error) {
      return next(error)
    }
  },

  loginUser: async (req, res, next) => {
    const { email, password } = req.body

    try {
      const user = await userService.signin(email, password)

      if (user.failed) return errorHandler(next, user)

      return res
        .status(200)
        .json(responseTemplate({
          status: 200,
          data: { authorization: user.token }
        }))
    } catch (error) {
      return next(error)
    }
  }
}

module.exports = controller
