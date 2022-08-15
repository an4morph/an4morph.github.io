import React from 'react'

import { DefaultTheme, ThemeProvider } from 'styled-components'

import { GlobalStyle } from './global'

const theme: DefaultTheme = {
  fonts: {
    normal: "'Anonymous Pro', monospace",
    primary: "'Poppins', sans-serif",
  },
  gradient: `radial-gradient(46.38% 30.62% at 50.08% 40.09%, rgba(255, 239, 152, 0.61) 0%, rgba(255, 239, 152, 0) 100%)`,
  thickness: {
    mobileS: '2px',
    mobileM: '2px',
    tabletS: '2px',
    tabletM: '2px',
    desktop: '0.16vw',
  },
  paragraph: {
    mobileS: '18px',
    mobileM: '18px',
    tabletS: '18px',
    tabletM: '18px',
    desktop: '1.4vw',
  },
  h3: {
    mobileS: '22px',
    mobileM: '22px',
    tabletS: '22px',
    tabletM: '22px',
    desktop: '1.8vw',
  },
  scroll: '1vw'
}

export const Theme: React.FC = ({ children }) => (
  <ThemeProvider theme={theme}>
    <GlobalStyle />
    {children}
  </ThemeProvider>
)
