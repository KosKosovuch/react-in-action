import React, { ReactElement, ReactNode } from 'react'
import { ThemeContext } from '../utils/contexts/theme-ctx'

interface Props {
  children: ReactNode
}

export const DefaultLayout = ({ children }: Props): ReactElement => {
  return (
    <div>
      <nav style={{ display: 'flex', justifyContent: 'flex-end' }}>
        <ThemeContext.Consumer>
          {({ theme, toggleTheme }) => <button onClick={toggleTheme}>{theme}</button>}
        </ThemeContext.Consumer>
      </nav>
      <main>{children}</main>
    </div>
  )
}
