import React, { ReactElement } from 'react'

export const Footer = (): ReactElement => {
  return <footer style={{ textAlign: 'center', padding: '20px' }}>Test React App {new Date().getFullYear()}</footer>
}
