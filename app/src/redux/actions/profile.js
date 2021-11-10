import profileService from '../../services/profile.service'

export const ACTION_NAMES = {
  setLoading: '@profile/setLoading',
  setProfiles: '@profile/setProfiles',
  setActiveProfile: '@profile/setActive',
  createProfile: '@profile/create',
  modifyProfileName: '@profile/modifyName'
}

const statusActions = {
  setIsLoading: { type: ACTION_NAMES.setLoading, payload: true },
  removeIsLoading: { type: ACTION_NAMES.setLoading, payload: false }
}

export default {
  setProfiles: () => async dispatch => {
    dispatch(statusActions.setIsLoading)

    const profiles = await profileService.getUserProfiles()
    if (!profiles.error) {
      dispatch({
        type: ACTION_NAMES.setProfiles,
        payload: profiles.data
      })
    }

    dispatch(statusActions.removeIsLoading)
  },

  setActiveProfile: id => ({
    type: ACTION_NAMES.setActiveProfile,
    payload: id
  }),

  createProfile: ({ name }) => async dispatch => {
    const profile = await profileService.createProfile({ name })

    if (!profile.error) {
      dispatch({
        type: ACTION_NAMES.createProfile,
        payload: profile.data
      })
    }
  },

  modifyProfileName: ({ id, name }) => async dispatch => {
    const profile = await profileService.modifyProfileName({ id, name })

    if (!profile.error) {
      dispatch({
        type: ACTION_NAMES.modifyProfileName,
        payload: profile.data
      })
    }
  }
}
