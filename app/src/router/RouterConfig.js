import { Switch, Route, Redirect, useLocation } from 'react-router-dom'
import { useSelector } from 'react-redux'
import ProtectedRoute from './ProtectedRoute'
import useCheckUserToken from '../hooks/useCheckUserToken'

// pages
import Home from '../pages/Home'
import LogIn from '../pages/LogIn'
import SignUp from '../pages/SignUp'

// TODO: unknown endpoint - 404
const RouterConfig = () => {
  const location = useLocation()
  const isLoggedIn = useSelector(state => state.user.isLoggedIn)

  // when user navigate into differents routes, this hook will check if the
  // user's authorization token is valid or not. If it's not valid, the user
  // will logout from application.
  useCheckUserToken(location)

  return (
    <Switch>
      <Route exact path='/'>
        {isLoggedIn
          ? <Redirect to='/profiles' />
          : <Home />}
      </Route>

      <Route path='/login'>
        {isLoggedIn
          ? <Redirect to='/' />
          : <LogIn />}
      </Route>

      <Route path='/sign-up'>
        {isLoggedIn
          ? <Redirect to='/' />
          : <SignUp />}
      </Route>

      <ProtectedRoute path='/profiles'>
        <p>profiles page</p>
      </ProtectedRoute>
    </Switch>
  )
}

export default RouterConfig
