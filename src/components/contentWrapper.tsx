import React, { ReactElement, ReactNode, CSSProperties } from 'react'

interface Props {
  children: ReactNode
  style?: CSSProperties
}

export const ContentWrapper = ({ children, style }: Props): ReactElement => <main style={style}>{children}</main>
