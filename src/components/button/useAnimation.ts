import { useCallback, useEffect, useMemo, useState } from "react"

import { useAppMediaQuery } from "../../hooks/useAppMediaQuery"
import { Colors } from "../../styles/types"
import { gsap } from "../../utils/gsap"

export const useAnimation = (trigger: React.MutableRefObject<HTMLButtonElement>, toggle: boolean) => {
  const q = gsap.utils.selector(trigger)
  const [dirty, setDirty] = useState(false)
  const msize = useAppMediaQuery()

  useEffect(() => {
    if (toggle && !dirty) setDirty(true)
  }, [toggle, dirty])

  const init = useCallback(() => {
    gsap.set(q('.background'), {
      opacity: 0,
    })
  }, [q])

  const background = useMemo(() => ({
    in: () => gsap.to(q('.background'), {
      opacity: 1,
    }),
    out: () => gsap.to(q('.background'), {
      opacity: 0,
    })
  }), [q])

  useEffect(() => {
    init()

    if (toggle) {
      background.in()
    }
    if (!toggle && dirty) {
      background.out()
    }
  }, [init, dirty, toggle, background])
}