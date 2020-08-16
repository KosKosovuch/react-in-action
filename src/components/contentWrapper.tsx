import React, { ReactElement, ReactNode, CSSProperties } from 'react'

interface Props {
  children: ReactNode
  style?: CSSProperties
}
  
export const ContentWrapper = ({ children, style }: Props): ReactElement => (
  <main className="container" style={style}>
    {children}
  </main>
)
