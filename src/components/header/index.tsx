import './style.scss'
import React, { ReactElement, useContext } from 'react'

// components
import { Nav } from '../nav'

// interfaces
import { IThemeCtx } from 'utils/interfaces/ctx/IThemeCtx'

// ctx
import { ThemeCtx } from 'utils/contexts/theme-ctx'

export const Header = (): ReactElement => {
  const {
    currentTheme: { colors },
  } = useContext<IThemeCtx>(ThemeCtx)
  return (
    <header
      style={{
        backgroundColor: colors.primary,
        transition: 'color ease-in-out 0.3s, background-color ease-in-out 0.3s',
      }}
    >
      <Nav />
    </header>
  )
}
