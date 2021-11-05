import userService from '../../services/user.service'
import authInLocalStorage from '../../utils/authInLocalStorage'

export const ACTIONS_NAMES = {
  loginUser: '@user/login',
  logOutUser: '@user/logout',
  signUpUser: '@user/signup',
  setError: '@user/setError',
  removeError: '@user/removeError',
  setLoading: '@user/setLoading',
  setSuccessfulSignup: '@user/successfulSignup'
}

const handleResponseError = (error, dispatch) => {
  dispatch({
    type: ACTIONS_NAMES.setError,
    payload: {
      errorMessage: error.message || null,
      errorFields: error.fields || null
    }
  })
}

const statusActions = {
  setIsLoading: { type: ACTIONS_NAMES.setLoading, payload: true },
  removeIsLoading: { type: ACTIONS_NAMES.setLoading, payload: false },
  setError: ({ errorMessage, errorFields }) => ({
    type: ACTIONS_NAMES.setError,
    payload: {
      errorMessage,
      errorFields
    }
  }),
  removeError: {
    type: ACTIONS_NAMES.removeError
  }
}

const actionCreators = {
  login: ({ email, password }) => async dispatch => {
    dispatch(statusActions.removeError)
    dispatch(statusActions.setIsLoading)

    const response = await userService.login({ email, password })
    if (response.error) return handleResponseError(response, dispatch)

    authInLocalStorage.setUserData({ authorization: response.data.authorization })

    dispatch({
      type: ACTIONS_NAMES.loginUser,
      payload: {
        authorization: response.data.authorization
      }
    })
  },

  logout: () => async dispatch => {
    authInLocalStorage.removeUserData()
    dispatch({
      type: ACTIONS_NAMES.logOutUser
    })
  },

  signup: ({ email, password }) => async dispatch => {
    const response = await userService.register({ email, password })
    if (response.error) return handleResponseError(response, dispatch)

    dispatch({ type: ACTIONS_NAMES.setSuccessfulSignup })
  },

  removeErrors: {
    type: ACTIONS_NAMES.removeError
  }
}

export default actionCreators
