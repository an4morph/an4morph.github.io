import { useCallback, useEffect, useMemo, useState } from "react"

import { gsap } from "../../utils/gsap"

const xTransition = 60

const timing = {
  background: {
    duration: 0.3,
    delay: 0.4
  },
  link: {
    duration: 0.3,
    delay: 0.3,
    stagger: 0.1,
  }
}

export const useAnimation = (trigger: React.MutableRefObject<HTMLDivElement>, toggle: boolean) => {
  const q = gsap.utils.selector(trigger)
  const [dirty, setDirty] = useState(false)

  const gsapTo = useCallback((selector: string, config: gsap.TweenVars) => {
    if (!q(selector).length) return null
    return gsap.to(q(selector), config)
  }, [q])

  useEffect(() => {
    if (toggle && !dirty) setDirty(true)
  }, [toggle, dirty])

  const init = useCallback(() => {
    gsap.set(q('.link-item'), {
      opacity: 0,
      x: xTransition,
      duration: 0
    })
    gsap.set(q('.background'), {
      opacity: 0,
      duration: 0,
      width: 0
    })
  }, [q])

  const container = useMemo(() => ({
    in: () => gsap.to(trigger.current, {
      x: 0,
      duration: 0
    }),
    out: () => gsap.to(trigger.current, {
      x: '100%',
      duration: 0,
      delay: timing.background.delay + timing.background.duration
    })
  }), [trigger])

  const background = useMemo(() => ({
    in: () => gsapTo('.background', {
      width: '100%',
      ease: "power1.out",
      duration: timing.background.duration,
      opacity: 1
    }),
    out: () => gsap.fromTo(q('.background'), {
      opacity: 1,
      width: '100%'
    }, {
      width: 0,
      opacity: 0,
      ease: "power1.in",
      duration: timing.background.duration,
      delay: timing.background.delay
    })
  }), [q, gsapTo])

  const linkItem = useMemo(() => ({
    in: () => gsapTo('.link-item', {
      delay: timing.link.delay,
      duration: timing.link.duration,
      opacity: 1,
      x: 0,
      stagger: timing.link.stagger,
      ease: "power2.out"
    }),
    out: () => gsap.fromTo(q('.link-item'), {
      opacity: 1,
      x: 0
    }, {
      duration: timing.link.duration,
      opacity: 0,
      x: xTransition,
      stagger: -timing.link.stagger,
      ease: "power1.in"
    })
  }), [q, gsapTo])

  useEffect(() => {
    init()

    if (toggle) {
      container.in()
      linkItem.in()
      background.in()
    }
    if (!toggle && dirty) {
      container.out()
      linkItem.out()
      background.out()
    }
  }, [dirty, toggle, container, background, linkItem, init])
}