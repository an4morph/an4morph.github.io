import 'styled-components'

export enum Colors {
  webBlack = '#262323',
  webWhite = '#FDFBF7',
  main = '#FFEF98',
  like = '#DB7474',
}

declare module 'styled-components' {
  export interface DefaultTheme {
    fonts: {
      primary: string
      normal: string
    },
    gradient: string
  }
}
