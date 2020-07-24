import React, { ReactElement, useState } from 'react'
// app styles
import './style.scss'
// ctx
import { ThemeProvide, defaultThemeCtx } from '../utils/contexts/theme-ctx'
import { themes } from 'themes'
// router
import { Router } from '../router/routes'

export const App = (): ReactElement => {
  const toggleTheme = (): void => {
    setTheme(({ currentTheme }) => ({
      currentTheme: currentTheme === themes.light ? themes.dark : themes.light,
      toggleTheme: toggleTheme,
    }))
  }
  const [theme, setTheme] = useState({ ...defaultThemeCtx, toggleTheme: toggleTheme })
  const {
    currentTheme: {
      colors: { primary, text },
    },
  } = theme

  return (
    <ThemeProvide value={theme}>
      <div
        style={{
          backgroundColor: primary,
          color: text,
          transition: 'color ease-in-out 0.3s, background-color ease-in-out 0.3s',
        }}
      >
        <Router />
      </div>
    </ThemeProvide>
  )
}
