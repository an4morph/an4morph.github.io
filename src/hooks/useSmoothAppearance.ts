import { useEffect } from 'react'

import { gsap } from '../utils/gsap'
import { useAppMediaQuery } from './useAppMediaQuery'

export type SmoothItem = {
  selector: string
  direction?: 'top' | 'left' | 'right' | 'bottom'
  distance?: string
  delay?: number
  trigger?: string | HTMLDivElement
  start?: string
}

const withStagger = (items: SmoothItem[], timing: number) => {
  return items.map((item, index) => ({
    ...item,
    delay: timing * index
  }))
}

export const useSmoothAppearance = (mainRef: React.MutableRefObject<HTMLDivElement>, items: SmoothItem[], start1?: boolean) => {
  const msize = useAppMediaQuery()
  const isWideScreen = msize === 'desktop' || msize === 'tabletM'
  const DEFAULT_DISTANCE = isWideScreen ? '4vw' : '40px'

  useEffect(() => {
    if (!start1 && start1 !== undefined) return
    const q = gsap.utils.selector(mainRef)
    const actualItems = isWideScreen ? withStagger(items, 0) : items

    actualItems.forEach(({ selector, direction, distance, delay, trigger, start }) => {
      const getPosition = () => {
        let key = 'x'
        let value = `-${distance || DEFAULT_DISTANCE}`

        if (direction === 'top' || direction === 'bottom') key = 'y'
        if (direction === 'top' || direction === 'left') value = distance || DEFAULT_DISTANCE

        if (!isWideScreen) key = 'x'
        if (!isWideScreen) value = `-${distance || DEFAULT_DISTANCE}`

        return { key, value }
      }
      const position = getPosition()

      const triggerByType = typeof trigger === 'string' ? q(trigger) : trigger
      const currentTrigger = trigger ? triggerByType : q(selector)

      gsap.fromTo(q(selector), {
        [position.key]: position.value
      }, {
        [position.key]: 0,
        delay,
        opacity: 1,
        duration: 1,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: currentTrigger,
          start: start || 'top 90%',
        },
      })
    })
  }, [items, mainRef, isWideScreen, DEFAULT_DISTANCE, start1])
}