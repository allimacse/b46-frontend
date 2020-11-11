import React from 'react'
import {
  Home,
  Example,
  Signup,
  NotFound,
  Login,
  Logout,
  Profile
} from './pages/index.js'

import {
  Switch,
  Route,
} from 'react-router-dom'

import { PrivateRoute } from './components/index.js'

export default (
  <Switch>
    <Route
      exact path='/'
      component={Home}
    />
    <PrivateRoute
      exact path='/example'
      component={Example}
    />
    <Route
      exact path='/signup'
      component={Signup}
    />
    <Route
      exact path='/login'
      component={Login}
    />
    <PrivateRoute
      exact path='/logout'
      component={Logout}
    />
    <PrivateRoute
      exact path='/profile/:id'
      component={Profile}
    />
    <Route
      component={NotFound}
    />
  </Switch>
)
