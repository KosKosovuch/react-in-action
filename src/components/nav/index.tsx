import './style.scss'
import React, { ReactElement, useContext } from 'react'
import { NavLink } from 'react-router-dom'

// theme-ctx
import { ThemeConsumer, ThemeCtx } from 'utils/contexts/theme-ctx'

// Interfaces
import { IThemeCtx } from 'utils/interfaces/ctx/IThemeCtx'

export const Nav = (): ReactElement => {
  const { currentTheme } = useContext<IThemeCtx>(ThemeCtx)

  return (
    <nav>
      <div>
        <NavLink to="/" style={{ color: currentTheme.name === 'light' ? '#000' : '#fff' }}>
          /
        </NavLink>
        <NavLink to="/privacy" style={{ color: currentTheme.name === 'light' ? '#000' : '#fff' }}>
          Privacy
        </NavLink>
        <NavLink to="/auth" style={{ color: currentTheme.name === 'light' ? '#000' : '#fff' }}>
          Auth Module Load
        </NavLink>
        <NavLink to="/auth/sign-up" style={{ color: currentTheme.name === 'light' ? '#000' : '#fff' }}>
          Sign-up
        </NavLink>
        <NavLink to="/fuck" style={{ color: currentTheme.name === 'light' ? '#000' : '#fff' }}>
          404
        </NavLink>
      </div>
      <ThemeConsumer>
        {({ currentTheme, toggleTheme }) => <button onClick={toggleTheme}>{currentTheme.name}</button>}
      </ThemeConsumer>
    </nav>
  )
}
