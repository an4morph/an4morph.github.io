import { useCallback, useEffect, useMemo, useState } from "react"

import { useAppMediaQuery } from "../../hooks/useAppMediaQuery"
import { Colors } from "../../styles/types"
import { gsap } from "../../utils/gsap"

export const useAnimation = (trigger: React.MutableRefObject<HTMLButtonElement>, toggle: boolean) => {
  const q = gsap.utils.selector(trigger)
  const [dirty, setDirty] = useState(false)
  const msize = useAppMediaQuery()

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
    gsap.set(q('.link-item'), {
      opacity: 0,
    })
  }, [q])

  const line = useMemo(() => ({
    in: () => gsap.to(q('.line'), {
      background: Colors.webWhite,
    }),
    out: () => gsap.to(q('.line'), {
      background: Colors.webBlack,
    })
  }), [q])

  const line1 = useMemo(() => ({
    in: () => gsap.to(q('.line-1'), {
      rotate: 35,
      width: getLineWidth().long,
    }),
    out: () => gsap.to(q('.line-1'), {
      rotate: 0,
      width: getLineWidth().short
    })
  }), [q, getLineWidth])

  const line2 = useMemo(() => ({
    in: () => gsap.to(q('.line-2'), {
      opacity: 0,
    }),
    out: () => gsap.to(q('.line-2'), {
      opacity: 1,
    })
  }), [q])

  const line3 = useMemo(() => ({
    in: () => gsap.to(q('.line-3'), {
      rotate: -35,
      width: getLineWidth().long,
    }),
    out: () => gsap.to(q('.line-3'), {
      rotate: 0,
      width: getLineWidth().short,
    })
  }), [q, getLineWidth])

  useEffect(() => {
    init()

    if (toggle) {
      line.in()
      line1.in()
      line2.in()
      line3.in()
    }
    if (!toggle && dirty) {
      line.out()
      line1.out()
      line2.out()
      line3.out()
    }
  }, [init, dirty, toggle, line, line1, line2, line3])
}