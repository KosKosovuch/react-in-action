import React, { useState } from 'react'
// app styles
import './style.scss'
// components
import { Counter } from '../components/Counter'
import { Form } from '../components/form/Form'
// layout
import { DefaultLayout } from '../layouts/DefaultLayout'
// ctx
import { THEMES, ThemeContext } from '../utils/contexts/theme-ctx'

export const App = () => {
  const toggleTheme = () => {
    setThemeState(({ theme }) => ({
      theme: theme === THEMES.LIGHT ? THEMES.DARK : THEMES.LIGHT,
      toggleTheme: toggleTheme,
    }))
  }

  const [state, setThemeState] = useState({
    theme: THEMES.LIGHT,
    toggleTheme: toggleTheme,
  })

  return (
    <ThemeContext.Provider value={state}>
      <div className={`App ${state.theme}`}>
        <DefaultLayout>
          <Counter />
          <Form />
        </DefaultLayout>
      </div>
    </ThemeContext.Provider>
  )
}
