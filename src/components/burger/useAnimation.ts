import { useCallback, useEffect, useMemo, useState } from "react"

import { useAppMediaQuery } from "../../hooks/useAppMediaQuery"
import { Colors } from "../../styles/types"
import { gsap } from "../../utils/gsap"

export const useAnimation = (trigger: React.MutableRefObject<HTMLButtonElement>, toggle: boolean) => {
  const q = gsap.utils.selector(trigger)
  const [dirty, setDirty] = useState(false)
  const msize = useAppMediaQuery()

  const gsapTo = useCallback((selector: string, config: gsap.TweenVars) => {
    if (!q(selector).length) return null
    return gsap.to(q(selector), config)
  }, [q])

  const getLineWidth = useCallback(() => {
    if (msize === 'desktop') {
      return {
        long: '4.2vw',
        short: '3.2vw',
      }
    }
    if (msize === 'tabletM' || msize === 'tabletS') {
      return {
        long: '57px',
        short: '38px',
      }
    }
    return {
      long: '39px',
      short: '28px',
    }
  }, [msize])

  useEffect(() => {
    if (toggle && !dirty) setDirty(true)
  }, [toggle, dirty])

  const init = useCallback(() => {
    if (q('.link-item').length) {
      gsap.set(q('.link-item'), {
        opacity: 0,
      })
    }
  }, [q])

  useEffect(() => {
    const start = () => {
      if (msize === 'desktop') return window.innerWidth * 0.056
      if (msize === 'tabletM' || msize === 'tabletS') return 74
      return 64
    }
    gsap.to(q('.line'), {
      backgroundColor: Colors.webWhite,
      scrollTrigger: {
        trigger: document.querySelector('#contacts-block'),
        start: `top ${start()}`,
        end: 'top top',
        scrub: true,
      }
    })
  }, [q, msize])

  const line1 = useMemo(() => ({
    in: () => gsapTo('.line-1', {
      rotate: 35,
      width: getLineWidth().long,
    }),
    out: () => gsapTo('.line-1', {
      rotate: 0,
      width: getLineWidth().short
    })
  }), [gsapTo, getLineWidth])

  const line2 = useMemo(() => ({
    in: () => gsapTo('.line-2', {
      opacity: 0,
    }),
    out: () => gsapTo('.line-2', {
      opacity: 1,
    })
  }), [gsapTo])

  const line3 = useMemo(() => ({
    in: () => gsapTo('.line-3', {
      rotate: -35,
      width: getLineWidth().long,
    }),
    out: () => gsapTo('.line-3', {
      rotate: 0,
      width: getLineWidth().short,
    })
  }), [gsapTo, getLineWidth])

  useEffect(() => {
    init()

    if (toggle) {
      line1.in()
      line2.in()
      line3.in()
    }
    if (!toggle && dirty) {
      line1.out()
      line2.out()
      line3.out()
    }
  }, [init, dirty, toggle, line1, line2, line3])
}