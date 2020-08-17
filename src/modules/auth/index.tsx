import React, { ReactElement, useContext } from 'react'
import { Router } from './router/routes'
import { Link, useRouteMatch } from 'react-router-dom'

// const
import { VIEW_NAMES } from './utils/const/viewNames'
import { IThemeCtx } from 'utils/interfaces/ctx/IThemeCtx'
import { ThemeCtx } from 'utils/contexts/theme-ctx'

const AuthModule = (): ReactElement => {
  const { url } = useRouteMatch()

  const {
    currentTheme: {
      colors: { text },
    },
  } = useContext<IThemeCtx>(ThemeCtx)

  return (
    <>
      <h2>Auth Module</h2>
      <ul>
        <li>
          <Link style={{ marginRight: 20 + 'px', color: text }} to={`${url}/${VIEW_NAMES.SIGN_UP}`}>
            {VIEW_NAMES.SIGN_UP}
          </Link>
        </li>
        <li>
          <Link style={{ color: text }} to={`${url}/${VIEW_NAMES.SIGN_IN}`}>
            {VIEW_NAMES.SIGN_IN}
          </Link>
        </li>
      </ul>
      <h3>Views:</h3>
      <Router />
    </>
  )
}

export default AuthModule
