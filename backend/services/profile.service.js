const Profile = require('../models/profile')
const User = require('../models/user')

const profileService = {
  ERROR_NAMES: {
    USER_NOT_FOUND: 'USER_NOT_FOUND',
    PROFILE_NOT_FOUND: 'PROFILE_NOT_FOUND'
  },

  getProfilesByUserId: async function (userId) {
    const user = await User.findById(userId)
    if (!user) return { failed: true, error: this.ERROR_NAMES.USER_NOT_FOUND }

    return await Profile.find({ account: userId })
  },

  createProfile: async function ({ userId, name }) {
    const profile = new Profile({
      account: userId,
      name
    })

    const user = await User.findById(userId)
    if (!user) return { failed: true, error: this.ERROR_NAMES.USER_NOT_FOUND }

    await profile.save()

    await User.findByIdAndUpdate(userId, {
      $push: {
        profiles: profile.id
      }
    }, {
      new: true
    })

    return profile
  },

  getProfileById: async function (profileId) {
    const profile = await Profile.findById(profileId)

    if (!profile) return { failed: true, error: this.ERROR_NAMES.PROFILE_NOT_FOUND }

    return profile
  },

  modifyProfileName: async function ({ id, name }) {
    const profile = await Profile.findByIdAndUpdate(id, {
      $set: {
        name
      }
    }, {
      new: true
    })

    if (!profile) return { failed: true, error: this.ERROR_NAMES.PROFILE_NOT_FOUND }

    return profile
  }
}

module.exports = profileService
