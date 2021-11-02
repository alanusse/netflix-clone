import { ACTIONS_NAMES } from '../actions/user'

const initialState = {
  isError: false,
  errorFields: null,
  errorMessage: null,
  isLoading: false,
  isLoggedIn: false,
  authorization: JSON.parse(window.localStorage.getItem('user'))?.authorization || null
}

const userReducer = (state = initialState, action) => {
  const { payload } = action

  switch (action.type) {
    case ACTIONS_NAMES.loginUser: {
      const { authorization } = payload
      return {
        ...state,
        isError: false,
        errorFields: null,
        errorMessage: null,
        isLoading: false,
        isLoggedIn: true,
        authorization
      }
    }

    case ACTIONS_NAMES.setLoading:
      return {
        ...state,
        isLoading: payload
      }

    case ACTIONS_NAMES.setError: {
      const { isError, errorMessage, errorFields } = payload
      return {
        ...state,
        isError,
        errorMessage,
        errorFields
      }
    }

    default:
      return state
  }
}

export default userReducer
