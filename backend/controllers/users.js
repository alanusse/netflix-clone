const userService = require('../services/user.service')
const profileService = require('../services/profile.service')
const CustomError = require('../errors/CustomError')
const responseTemplate = require('../utils/responseTemplate')

const errorHandler = (next, data) => {
  switch (data.error) {
    case userService.ERROR_NAMES.USER_NOT_FOUND:
      throw new CustomError(404, 'User with that ID is not found.')

    default:
      return next(data)
  }
}

const controller = {
  getUserById: async (req, res, next) => {
    const { id } = req.params

    try {
      const user = await userService.getUserById(id)

      if (user.failed) return errorHandler(next, user)

      return res
        .status(200)
        .json(responseTemplate({ status: 200, data: user }))
    } catch (error) {
      return next(error)
    }
  },

  getUserProfiles: async function (req, res, next) {
    const { id } = req.params

    try {
      const profiles = await profileService.getProfilesByUserId(id)

      if (profiles.failed) return errorHandler(next, profiles)

      return res
        .status(200)
        .json(responseTemplate({ status: 200, data: profiles }))
    } catch (error) {
      next(error)
    }
  }
}

module.exports = controller
