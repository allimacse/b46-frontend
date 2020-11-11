import React, { useContext } from 'react'
import { AuthContext } from '../../context/AuthContext.js'
import { Route, Redirect } from 'react-router-dom'

const PrivateRoute = ({ component, ...RouteProps }) => {
  const { isAuth,user } = useContext(AuthContext)
  const validateAuth = props => {
    const Component = component
    console.log(user);
    return isAuth
      ? (<Component {...props} />)
      : (<Redirect to={'/login'}/>)
  }
  return (
    <Route
      {...RouteProps}
      render={
        props => (validateAuth(props))
      }
    />
  )
}


export default PrivateRoute