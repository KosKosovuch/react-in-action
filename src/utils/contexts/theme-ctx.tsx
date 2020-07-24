import { createContext } from 'react'
import { themes } from 'themes'
import { IThemeCtx } from '../interfaces/ctx/IThemeCtx'

const defaultCtx: IThemeCtx = {
  currentTheme: themes.light,
  toggleTheme: undefined,
}

const ThemeCtx = createContext(defaultCtx)
ThemeCtx.displayName = 'ThemeContext'

const ThemeProvide = ThemeCtx.Provider
const ThemeConsumer = ThemeCtx.Consumer

export { ThemeProvide, ThemeConsumer, ThemeCtx, defaultCtx }
