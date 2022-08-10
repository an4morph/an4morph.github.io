import 'styled-components'

export enum Colors {
  webBlack = '#262323',
  webWhite = '#FDFBF7',
  yellow = '#FFEF98',
  red = '#DB7474',
  green = '#B1E7CD',
  blue = '#BFDCF6',
  purple = '#F1B6F7',
}

declare module 'styled-components' {
  export interface DefaultTheme {
    fonts: {
      primary: string
      normal: string
    }
  }
}
