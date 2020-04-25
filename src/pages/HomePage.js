import React from 'react'
import { Link } from 'react-router-dom'

import Page from '../components/Page'

import { checkIsAuthenticated, getAuthenticatedUser } from '../utils/auth'

const HomePage = () => {
  const isAuthenticated = checkIsAuthenticated()
  const user = getAuthenticatedUser()

  return (
    <Page title='Welcome to Example Auth React'>
      {!isAuthenticated && (
        <div>
          <p>
            This is an example project to learn about authentication and
            authorization in React.
          </p>
          <p>
            Please <Link to='/register'>register</Link> or{' '}
            <Link to='/login'>login</Link> to see the{' '}
            <Link to='/users'>users</Link> and{' '}
            <Link to='/dashboard'>dashboard</Link>.
          </p>
          <p>
            Check <Link to='/about'>about page</Link> for demo users.
          </p>
          <p>The features:</p>
          <ul>
            <li>Register new user</li>
            <li>Login to existing user</li>
            <li>Dashboard to see user profile</li>
            <li>See all registered users</li>
            <li>Search users by name</li>
          </ul>
        </div>
      )}

      {isAuthenticated && <h2>Hello {user.name}!</h2>}
    </Page>
  )
}

export default HomePage
