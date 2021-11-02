import userService from '../../services/user.service'

export const ACTIONS_NAMES = {
  loginUser: '@user/login',
  setError: '@user/setError',
  setLoading: '@user/setLoading'
}

const statusActions = {
  setIsLoading: { type: ACTIONS_NAMES.setLoading, payload: true },
  removeIsLoading: { type: ACTIONS_NAMES.setLoading, payload: false },
  setError: ({ errorMessage, errorFields }) => ({
    type: ACTIONS_NAMES.setError,
    payload: {
      isError: true,
      errorMessage,
      errorFields
    }
  }),
  removeError: {
    type: ACTIONS_NAMES.setError,
    payload: {
      isError: false,
      errorMessage: null,
      errorFields: null
    }
  }
}

const actionCreators = {
  login: ({ email, password }) => async dispatch => {
    dispatch(statusActions.removeError)
    dispatch(statusActions.setIsLoading)

    try {
      const response = await userService.login({ email, password })
      dispatch({
        type: ACTIONS_NAMES.loginUser,
        payload: {
          authentication: response.data.authentication
        }
      })
    } catch (error) {
      dispatch(statusActions.setError({
        errorMessage: error.response.data.error,
        errorFields: error.response.data.errors
      }))
    } finally {
      dispatch(statusActions.removeIsLoading)
    }
  }
}

export default actionCreators
