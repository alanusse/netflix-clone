import PropTypes from 'prop-types'
import { Route, Redirect } from 'react-router-dom'
import { useSelector } from 'react-redux'

const ProtectedRoute = ({ children, ...props }) => {
  const isLoggedIn = useSelector(state => state.user.isLoggedIn)

  return (
    <Route {...props}>
      {isLoggedIn
        ? children
        : <Redirect to='/login' />}
    </Route>
  )
}

ProtectedRoute.propTypes = {
  children: PropTypes.element
}

export default ProtectedRoute
