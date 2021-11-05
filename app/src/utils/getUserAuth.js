import isValidJWT from './isValidJWT'

/**
 * Get user authentication token from window.localStorage
 *
 * @returns {(String|false)} Returns the token, otherwise returns false
 */
export default () => {
  const token = JSON.parse(window.localStorage.getItem('user'))?.authorization

  if (token) {
    return isValidJWT(token)
      ? token
      : false
  }

  return false
}
