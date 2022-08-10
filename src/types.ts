export type Breakpoint = { min?: number, max?: number }

export type MediaSizes =
  'mobileS' |
  'mobileM' |
  'tabletS' |
  'tabletM' |
  'desktop'

export type ThemeMedia = {
  [x in MediaSizes]?: string
}