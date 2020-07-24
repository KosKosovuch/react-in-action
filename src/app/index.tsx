import React, { ReactElement, useState } from 'react'
// app styles
import './style.scss'
// ctx
import { ThemeProvide } from '../utils/contexts/theme-ctx'
import { themes } from 'themes'
// router
import { Router } from '../router/routes'

export const App = (): ReactElement => {
  const [theme, setTheme] = useState({
    currentTheme: themes.light,
    toggleTheme: toggleTheme,
  })
  const primaryColor = theme.currentTheme.colors.primary

  function toggleTheme() {
    setTheme(({ currentTheme }) => ({
      currentTheme: currentTheme.name === themes.light.name ? themes.dark : themes.light,
      toggleTheme: toggleTheme,
    }))
  }

  return (
    <ThemeProvide value={theme}>
      <div
        style={{
          backgroundColor: theme.currentTheme.name === 'light' ? '#fff' : '#000',
          color: theme.currentTheme.name === 'light' ? '#000' : '#fff',
          transition: 'color ease-in-out 0.3s, background-color ease-in-out 0.3s',
        }}
      >
        <Router />
      </div>
    </ThemeProvide>
  )
}
