import { useEffect, useRef, useState } from "react"

import { nanoid } from "nanoid"

import { useSmoothAppearance } from "../../hooks/useSmoothAppearance"
import { gsap } from "../../utils/gsap"
import { Btns, Container, Gradient, Hint, LinkButton } from "./styled"

const links = [
  {
    id: nanoid(),
    name: 'Behance',
    link: 'https://www.behance.net/anamorph',
    hint: 'Behance hint'
  },
  {
    id: nanoid(),
    name: 'Github',
    link: 'https://github.com/an4morph',
    hint: 'Github hint'
  },
  {
    id: nanoid(),
    name: 'Figma',
    link: 'https://google.com',
    hint: 'Figma hint'
  },
  {
    id: nanoid(),
    name: 'Dribbble',
    link: 'https://dribbble.com/an4morph',
    hint: 'Dribbble hint'
  },
  {
    id: nanoid(),
    name: 'CV.pdf',
    link: 'https://google.com',
    hint: 'CV hint'
  },
]

const defaultHint = 'Here is all the information you need to understand my professional experience.'

export const CVBlock: React.FC = () => {
  const trigger = useRef() as React.MutableRefObject<HTMLDivElement> 
  const [hoverId, setHoverId] = useState<string | number | null>(null)
  const [start, setStart] = useState(false)
  const [start1, setStart1] = useState(true)

  useEffect(() => {
    setStart1(false)
  }, [])

  useSmoothAppearance(trigger, [
    { selector: '.hint', direction: 'top', start: 'top bottom' },
    { selector: '.buttons', direction: 'left', start: 'top 70%', trigger: trigger.current },
  ], start1)

  const setHoverIdDelay = (id: string | number | null) => {
    setStart(true)
    setTimeout(() => {
      setHoverId(id)
      setStart(false)
    }, 200)
  }

  useEffect(() => {
    const q = gsap.utils.selector(trigger)
    if (start) {
      gsap.to(q('.hint-text'), {
        opacity: 0,
        x: '0.7vw',
        duration: 0.2,
        ease: 'power4.out',
      })
    } else {
      gsap.to(q('.hint-text'), {
        opacity: 1,
        x: 0,
        duration: 0.2,
        ease: 'power4.out',
      })
    }
  }, [start])

  return (
    <Container ref={trigger}>
      <Hint className="hint">
        <Gradient/>
        <p className="hint-text">
          {links.find(l => l.id === hoverId)?.hint || defaultHint}
        </p>
      </Hint>
      <Btns className="buttons">
        {
          links.map(({ id, name, link }) => (
            <div
              key={id}
              onMouseEnter={() => setHoverIdDelay(id)}
              onMouseLeave={() => setHoverIdDelay(null)}
            >
              <LinkButton
                key={id}
                link={link}
              >
                {name}
              </LinkButton>
            </div>
          ))
        }
      </Btns>
    </Container>
  )
}
