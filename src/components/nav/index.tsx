import './style.scss'
import React, { ReactElement, useContext } from 'react'
import { NavLink } from 'react-router-dom'

// theme-ctx
import { ThemeConsumer, ThemeCtx } from 'utils/contexts/theme-ctx'

// Interfaces
import { IThemeCtx } from 'utils/interfaces/ctx/IThemeCtx'

export const Nav = (): ReactElement => {
  const {
    currentTheme: {
      colors: { text },
    },
  } = useContext<IThemeCtx>(ThemeCtx)

  return (
    <nav>
      <div className="container">
        <NavLink to="/" style={{ color: text }}>
          /
        </NavLink>
        <NavLink to="/privacy" style={{ color: text }}>
          Privacy
        </NavLink>
        <NavLink to="/auth" style={{ color: text }}>
          Auth Module Load
        </NavLink>
        <NavLink to="/todo" style={{ color: text }}>
          Todo List
        </NavLink>
        <NavLink to="/fuck" style={{ color: text }}>
          404
        </NavLink>
      </div>
      <ThemeConsumer>
        {({ currentTheme, toggleTheme }) => <button onClick={toggleTheme}>{currentTheme.name}</button>}
      </ThemeConsumer>
    </nav>
  )
}
