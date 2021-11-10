import { ACTION_NAMES } from '../actions/profile'

const initialState = {
  isLoading: false,
  activeProfile: null,
  profiles: null
}

export default (state = initialState, action) => {
  const { payload } = action

  switch (action.type) {
    case ACTION_NAMES.setLoading: {
      return {
        ...state,
        isLoading: payload
      }
    }

    case ACTION_NAMES.setProfiles: {
      return {
        ...state,
        profiles: payload
      }
    }

    case ACTION_NAMES.setActiveProfile: {
      return {
        ...state,
        activeProfile: payload
      }
    }

    case ACTION_NAMES.createProfile: {
      return {
        ...state,
        profiles: [...state.profiles, payload]
      }
    }

    case ACTION_NAMES.modifyProfileName: {
      const profiles = state.profiles.map(profile => (
        profile.id === payload.id
          ? payload
          : profile
      ))

      return {
        ...state,
        profiles: profiles
      }
    }

    default: {
      return state
    }
  }
}
