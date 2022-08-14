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

export type Skill = {
  id: string | number
  name: string
  desc: string
  isFav?: boolean
}