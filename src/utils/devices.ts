import { css, DefaultTheme, FlattenInterpolation, ThemeProps } from 'styled-components'

import { Breakpoint, MediaSizes } from '../types'

export const breakpoints: Record<MediaSizes, Breakpoint> = {
  mobileS: { max: 319 },
  mobileM: { min: 320, max: 499 },
  tabletS: { min: 500, max: 767 },
  tabletM: { min: 768, max: 999 },
  desktop: { min: 1000 },
}

const mediaRuleCreator = ({ min, max }: Breakpoint): string => {
  const minRule = min && `(min-width: ${min}px)`
  const maxRule = max && `(max-width: ${max}px)`
  return maxRule && minRule ? `${minRule} and ${maxRule}` : (minRule || maxRule || '')
}

export const media: Record<string, string> = Object.fromEntries(
  Object.entries(breakpoints).map(([name, pointData]) => {
    return [name, mediaRuleCreator(pointData)]
  })
)

export const MediaCreator = (cb: (x: MediaSizes) => FlattenInterpolation<ThemeProps<DefaultTheme>>) => {
  const sizes: MediaSizes[] = ['mobileS', 'mobileM', 'tabletS', 'tabletM', 'desktop']
  const csssss = sizes.map((msize) => css`
    @media ${media[msize]} {
      ${cb(msize)}
    }
  `.concat('\n'))

  return csssss.flat()
}