import { Switch, Route } from 'react-router-dom'

// pages
import Home from '../pages/Home'
import LogIn from '../pages/LogIn'
import SignUp from '../pages/SignUp'

// TODO: unknown endpoint - 404
const RouterConfig = () => {
  return (
    <Switch>
      <Route exact path='/' component={Home} />
      <Route path='/login' component={LogIn} />
      <Route path='/sign-up' component={SignUp} />
    </Switch>
  )
}

export default RouterConfig
