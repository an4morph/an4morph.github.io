import { useEffect, useRef, useState } from "react"

import { nanoid } from "nanoid"

import { gsap } from "../../utils/gsap"
import { Btns, Container, Hint, LinkButton } from "./styled"
import { useAnimation } from "./useAnimation"

const links = [
  {
    id: nanoid(),
    name: 'Behance',
    link: 'https://google.com',
    hint: 'Behance hint'
  },
  {
    id: nanoid(),
    name: 'Github',
    link: 'https://google.com',
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
    link: 'https://google.com',
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

  useAnimation(trigger)

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
      gsap.to(q('.par'), {
        opacity: 0,
        x: '0.7vw',
        duration: 0.2,
        ease: 'power4.out',
      })
    } else {
      gsap.to(q('.par'), {
        opacity: 1,
        x: 0,
        duration: 0.2,
        ease: 'power4.out',
      })
    }
  }, [start])

  return (
    <Container ref={trigger}>
      <Hint>
        <p className="par">{links.find(l => l.id === hoverId)?.hint || defaultHint}</p>
      </Hint>
      <Btns>
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
