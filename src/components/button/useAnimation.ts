import { useCallback, useEffect, useMemo, useState } from "react"

import { Colors } from "../../styles/types"
import { gsap } from "../../utils/gsap"

export const useAnimation = (trigger: React.MutableRefObject<HTMLButtonElement>, toggle: boolean) => {
  const q = gsap.utils.selector(trigger)
  const [dirty, setDirty] = useState(false)

  const gsapTo = useCallback((selector: string, config: gsap.TweenVars) => {
    if (!q(selector).length) return null
    return gsap.to(q(selector), config)
  }, [q])

  useEffect(() => {
    if (toggle && !dirty) setDirty(true)
  }, [toggle, dirty])

  const background = useMemo(() => ({
    in: () => gsapTo('.background', {
      width: '150%',
      ease: 'power0.out',
      duration: 0.2
    }),
    out: () => gsapTo('.background', {
      width: 0,
      ease: 'power0.in',
      duration: 0.2
    }),
  }), [gsapTo])

  const textYellow = useMemo(() => ({
    in: () => gsapTo('.text-yellow', {
      color: Colors.main,
      ease: 'power0.out',
      duration: 0.2
    }),
    out: () => gsapTo('.text-yellow', {
      color: Colors.webWhite,
      ease: 'power0.in',
      duration: 0.2
    })
  }), [gsapTo])

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
      textYellow.in()
    }
    if (!toggle && dirty) {
      background.out()
      arrow.out()
      textYellow.out()
    }
  }, [dirty, toggle, background, arrow, textYellow])
}