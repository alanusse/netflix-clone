import jwtdecode from 'jwt-decode'

const getToken = () => {
  return JSON.parse(window.localStorage.getItem('user'))?.authorization
}

const setUserData = ({ authorization }) => {
  const data = JSON.stringify({
    authorization
  })

  window.localStorage.setItem('user', data)
}

const removeUserData = () => {
  window.localStorage.removeItem('user')
}

/**
 * Verify if authorization token is valid.
 *
 * @returns {Boolean} Boolean
 */
const verifyToken = () => {
  try {
    const decodedToken = jwtdecode(getToken())
    const expToken = decodedToken.exp * 1000
    return expToken > new Date()
  } catch (error) {
    return false
  }
}

export default {
  getToken,
  setUserData,
  removeUserData,
  verifyToken
}
