import { Switch, Route } from 'react-router-dom'

// pages
import Home from '../pages/Home'

const RouterConfig = () => {
  return (
    <Switch>
      <Route exact path='/'>
        <Home />
      </Route>
    </Switch>
  )
}

export default RouterConfig
