import { gsap } from "gsap"
import { ScrollToPlugin } from "gsap/ScrollToPlugin"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollToPlugin, ScrollTrigger)

const refreshScrollTrigger = (props: any) => {
  ScrollTrigger.refresh(props)
}

const scrollToElement = (element: any, duration = 0.5) => {
  gsap.to(window, {
    scrollTo: element,
    duration,
  })
}

export {
  gsap,
  ScrollTrigger,
  refreshScrollTrigger,
  scrollToElement
}
