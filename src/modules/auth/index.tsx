import React, { ReactElement } from 'react'
import { Router } from './router/routes'
import { Link } from 'react-router-dom'

const AuthModule = (): ReactElement[] => {
  return [<Router />, <Link to="sign-up">Sign up</Link>]
}

export default AuthModule
