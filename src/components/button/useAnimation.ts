import { useEffect, useMemo, useState } from "react"

import { gsap } from "../../utils/gsap"

export const useAnimation = (trigger: React.MutableRefObject<HTMLButtonElement>, toggle: boolean) => {
  const q = gsap.utils.selector(trigger)
  const [dirty, setDirty] = useState(false)

  useEffect(() => {
    if (toggle && !dirty) setDirty(true)
  }, [toggle, dirty])

  const background = useMemo(() => ({
    in: () => gsap.to(q('.background'), {
      width: '150%',
      ease: 'power0.out',
      duration: 0.3
    }),
    out: () => gsap.to(q('.background'), {
      width: 0,
      ease: 'power0.in',
      duration: 0.3
    })
  }), [q])

  useEffect(() => {
    if (toggle) {
      background.in()
    }
    if (!toggle && dirty) {
      background.out()
    }
  }, [dirty, toggle, background])
}