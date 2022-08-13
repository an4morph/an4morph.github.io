import React from 'react'

import { DefaultTheme, ThemeProvider } from 'styled-components'

import { GlobalStyle } from './global'

const theme: DefaultTheme = {
  fonts: {
    normal: "'Anonymous Pro', monospace",
    primary: "'Poppins', sans-serif",
  },
  gradient: `radial-gradient(46.38% 30.62% at 50.08% 40.09%, rgba(255, 239, 152, 0.61) 0%, rgba(255, 239, 152, 0) 100%)`
}

export const Theme: React.FC = ({ children }) => (
  <ThemeProvider theme={theme}>
    <GlobalStyle />
    {children}
  </ThemeProvider>
)
