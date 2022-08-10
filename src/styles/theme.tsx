import React from 'react'

import { DefaultTheme, ThemeProvider } from 'styled-components'

import { GlobalStyle } from './global'

const theme: DefaultTheme = {
  fonts: {
    normal: "'Anonymous Pro', monospace",
    primary: "'Jost', sans-serif",
  },
}

export const Theme: React.FC = ({ children }) => (
  <ThemeProvider theme={theme}>
    <GlobalStyle />
    {children}
  </ThemeProvider>
)
