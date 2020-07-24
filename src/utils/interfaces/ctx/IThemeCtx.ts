import { ITheme } from 'themes/interfaces/ITheme'

export interface IThemeCtx {
  currentTheme: ITheme
  toggleTheme: undefined | (() => void)
}
