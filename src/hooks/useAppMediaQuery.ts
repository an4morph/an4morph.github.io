import { useMediaQuery } from "react-responsive"

import { MediaSizes } from "../types"
import { breakpoints } from "../utils/devices"

export const useAppMediaQuery = (): MediaSizes => {
  const queries: Record<MediaSizes, boolean> = {
    mobileS: useMediaQuery({ maxWidth: breakpoints.mobileS.max }),
    mobileM: useMediaQuery({ maxWidth: breakpoints.mobileM.max, minWidth: breakpoints.mobileM.min }),
    tabletS: useMediaQuery({ maxWidth: breakpoints.tabletS.max, minWidth: breakpoints.tabletS.min }),
    tabletM: useMediaQuery({ maxWidth: breakpoints.tabletM.max, minWidth: breakpoints.tabletM.min }),
    desktop: useMediaQuery({ minWidth: breakpoints.desktop.min })
  }

  return (Object.keys(queries) as MediaSizes[]).find((key) => !!queries[key]) || 'desktop'
}