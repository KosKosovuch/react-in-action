import { createContext } from 'react'
import { themes } from 'themes'
import { IThemeCtx } from '../interfaces/ctx/IThemeCtx'

const defaultThemeCtx: IThemeCtx = {
  currentTheme: new Date().getHours() > 17 ? themes.dark : themes.light,
  toggleTheme: undefined,
}
const ThemeCtx = createContext(defaultThemeCtx)
ThemeCtx.displayName = 'ThemeContext'

const ThemeProvide = ThemeCtx.Provider
const ThemeConsumer = ThemeCtx.Consumer

export { ThemeProvide, ThemeConsumer, ThemeCtx, defaultThemeCtx }
