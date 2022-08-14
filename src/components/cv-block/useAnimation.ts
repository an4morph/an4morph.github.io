import { useEffect, useState } from "react"

import { useAppMediaQuery } from "../../hooks/useAppMediaQuery"
import { Colors } from "../../styles/types"
import { gsap } from "../../utils/gsap"

export const useAnimation = (trigger: React.MutableRefObject<HTMLDivElement>) => {
  const q = gsap.utils.selector(trigger)
  const [dirty, setDirty] = useState(false)
  const msize = useAppMediaQuery()

  useEffect(() => {
    
  }, [])
}