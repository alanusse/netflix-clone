const profileService = require('../services/profile.service')
const responseTemplate = require('../utils/responseTemplate')
const CustomError = require('../errors/CustomError')

const errorHandler = (next, data) => {
  switch (data.error) {
    case profileService.ERROR_NAMES.USER_NOT_FOUND:
      throw new CustomError(404, 'User with that ID is not found.')

    case profileService.ERROR_NAMES.PROFILE_NOT_FOUND:
      throw new CustomError(404, 'Profile with that ID is not found.')

    default:
      return next(data)
  }
}

const controller = {
  getUserProfiles: async (req, res, next) => {
    try {
      const profiles = await profileService.getProfilesByUserId(req.userId)
      if (profiles.failed) return errorHandler(next, profiles)

      return res
        .status(200)
        .json(responseTemplate({
          status: 200,
          data: profiles
        }))
    } catch (error) {
      return next(error)
    }
  },

  getProfileById: async (req, res, next) => {
    const { id } = req.params

    try {
      const profile = await profileService.getProfileById(id)
      if (profile.failed) return errorHandler(next, profile)

      return res
        .status(200)
        .json(responseTemplate({
          status: 200,
          data: profile
        }))
    } catch (error) {
      return next(error)
    }
  },

  createProfile: async function (req, res, next) {
    const { userId, name, avatar, isKidProfile } = req.body

    try {
      const profile = await profileService.createProfile({ userId, name, avatar, isKidProfile })

      if (profile.failed) return errorHandler(next, profile)

      return res
        .status(201)
        .json(responseTemplate({
          status: 201,
          data: profile
        }))
    } catch (error) {
      return next(error)
    }
  }
}

module.exports = controller
