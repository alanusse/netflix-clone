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
  setUnknownError: {
    type: ACTIONS_NAMES.setError,
    payload: {
      isError: true,
      errorMessage: 'An unexpected error occurred, please try again.',
      errorFields: null
    }
  },
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
          authorization: response.data.authorization
        }
      })
    } catch (error) {
      error.response
        ? dispatch(statusActions.setError({
          errorMessage: error.response.data.error,
          errorFields: error.response.data.errors
        }))
        : dispatch(statusActions.setUnknownError)
    }
  }
}

export default actionCreators
