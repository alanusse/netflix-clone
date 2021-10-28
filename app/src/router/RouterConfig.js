import { Switch, Route } from 'react-router-dom'

// pages
import Home from '../pages/Home'
import Login from '../pages/Login'

const RouterConfig = () => {
  return (
    <Switch>
      <Route exact path='/' component={Home} />
      <Route path='/login' component={Login} />
    </Switch>
  )
}

export default RouterConfig
