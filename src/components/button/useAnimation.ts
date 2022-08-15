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
      duration: 0.2
    }),
    out: () => gsap.to(q('.background'), {
      width: 0,
      ease: 'power0.in',
      duration: 0.2
    })
  }), [q])

  const arrow = useMemo(() => ({
    in: () => gsap.to(q('.arrow'), {
      x: '1.3vw',
      ease: 'power0.out',
      duration: 0.2
    }),
    out: () => gsap.to(q('.arrow'), {
      x: 0,
      ease: 'power0.in',
      duration: 0.2
    })
  }), [q])

  useEffect(() => {
    if (toggle) {
      background.in()
      arrow.in()
    }
    if (!toggle && dirty) {
      background.out()
      arrow.out()
    }
  }, [dirty, toggle, background, arrow])
}