import { useEffect, useMemo, useRef, useState } from "react"

import { useAppMediaQuery } from "../../hooks/useAppMediaQuery"
import { gsap } from "../../utils/gsap"
import { Burger } from "../burger"
import { Menu } from "../menu"
import { Container, Content, Name } from "./styled"

export const Nav: React.FC = ({ children }) => {
  const [isOpenMenu, setOpenMenu] = useState(false)
  const trigger = useRef() as React.MutableRefObject<HTMLDivElement> 
  const msize = useAppMediaQuery()
  const distance = useMemo(() => msize === 'desktop' ? '-3.4vw' : -40, [msize])

  const toggleMenu = () => {
    setOpenMenu(p => !p)
  }

  useEffect(() => {
    const q = gsap.utils.selector(trigger)

    const blocks = ['about', 'skills', 'cv', 'contacts']
    blocks.forEach((name) => {
      const commonScroll = {
        trigger: q(`#${name}-block`),
        scrub: true
      }
      gsap.fromTo(q(`.nav-${name}`), { x: distance }, {
        opacity: 1,
        x: 0,
        ease: 'power0.out',
        scrollTrigger: {
          start: '-20% top',
          end: 'top top',
          ...commonScroll
        }
      })
      gsap.fromTo(q(`.nav-${name}`), { x: 0 }, {
        opacity: 0,
        x: distance,
        ease: 'power0.out',
        scrollTrigger: {
          start: 'bottom 30%',
          end: 'bottom 10%',
          ...commonScroll
        }
      })
    })
  }, [distance])

  return (
    <Container ref={trigger}>
      <Name className="nav-about">About</Name>
      <Name className="nav-skills">Skills</Name>
      <Name className="nav-cv">CV &amp; Portfolio</Name>
      <Name className="nav-contacts">Contacts</Name>
      <Content>
        {children}
      </Content>
      <Burger 
        isOpen={isOpenMenu} 
        onClick={toggleMenu}
      />
      <Menu
        isOpen={isOpenMenu} 
        onClose={toggleMenu}
      />
    </Container>
  )
}
