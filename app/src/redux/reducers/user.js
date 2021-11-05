import authInLocalStorage from '../../utils/authInLocalStorage'
import { ACTIONS_NAMES } from '../actions/user'

const initialState = {
  isError: false,
  errorFields: null,
  errorMessage: null,
  isLoading: false,
  isLoggedIn: authInLocalStorage.verifyToken(),
  authorization: authInLocalStorage.verifyToken() ? authInLocalStorage.getToken() : null,
  successfulSignup: false
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
        successfulSignup: false,
        authorization
      }
    }

    case ACTIONS_NAMES.logOutUser:
      return {
        ...state,
        isLoggedIn: false,
        authorization: null
      }

    case ACTIONS_NAMES.setLoading:
      return {
        ...state,
        isLoading: payload
      }

    case ACTIONS_NAMES.setError: {
      const { errorMessage, errorFields } = payload
      return {
        ...state,
        isLoading: false,
        isError: true,
        errorMessage,
        errorFields
      }
    }

    case ACTIONS_NAMES.removeError: {
      return {
        ...state,
        isError: false,
        errorMessage: null,
        errorFields: null
      }
    }

    case ACTIONS_NAMES.setSuccessfulSignup: {
      return {
        ...state,
        successfulSignup: true
      }
    }

    default:
      return state
  }
}

export default userReducer
