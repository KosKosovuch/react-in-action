import { IColors } from './IColors'
import { IBreakpoints } from './IBreakpoints'
import { IFonts } from './IFonts'

export interface ITheme {
  name: string
  colors: IColors
  breakpoints: IBreakpoints
  fonts: IFonts
}
