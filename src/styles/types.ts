import 'styled-components'
import { ThemeMedia } from '../types'

export enum Colors {
  webBlack = '#262323',
  webWhite = '#f6f2ef',
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
    thickness: ThemeMedia
    paragraph: ThemeMedia
    h3: ThemeMedia
    scroll: string
  }
}
