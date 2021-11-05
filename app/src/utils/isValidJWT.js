import jwtdecode from 'jwt-decode'

/**
 * Verify if a token is valid.
 *
 * @param {String} token Token string
 * @returns {Boolean} Boolean
 */
export default token => {
  try {
    const decodedToken = jwtdecode(token)
    const expToken = decodedToken.exp * 1000
    return expToken > new Date()
  } catch (error) {
    return false
  }
}
