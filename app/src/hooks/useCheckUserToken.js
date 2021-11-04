import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import authInLocalStorage from '../utils/authInLocalStorage'
import userActions from '../redux/actions/user'

/**
 * This hook checks if the user's authorization token is valid when the user
 * navigate into differents application routes.
 *
 * If token is invalid or missing, the user will log out from application.
 *
 * @param {Object} location useLocation hook
 */
const useCheckUserToken = location => {
  const userToken = useSelector(state => state.user.authorization)
  const dispatch = useDispatch()

  useEffect(() => {
    if (userToken) {
      if (!authInLocalStorage.verifyToken(userToken)) {
        dispatch(userActions.logout())
      }
    }
  }, [location])
}

export default useCheckUserToken
