const userService = require('../services/user.service')
const CustomError = require('../errors/CustomError')

const controller = {
  getUserById: async (req, res, next) => {
    const { id } = req.params

    try {
      const user = await userService.getUserById(id)

      if (user.failed) {
        if (user.error === userService.ERROR_NAMES.USER_NOT_FOUND) throw new CustomError(404, 'User with that ID is not found.')

        return next(user)
      }

      return res
        .status(200)
        .json(user)
    } catch (error) {
      return next(error)
    }
  }
}

module.exports = controller
