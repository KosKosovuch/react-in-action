import { createContext } from 'react'

export enum THEMES {
  DARK = 'theme-dark',
  LIGHT = 'theme-light',
}

export const THEME_CTX: { theme: string; toggleTheme: () => void } = {
  theme: THEMES.LIGHT,
  toggleTheme: () => {},
}

export const ThemeContext = createContext(THEME_CTX)
