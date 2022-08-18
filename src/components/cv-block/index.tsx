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
    hint: 'My main portfolio for the most interesting projects'
  },
  {
    id: nanoid(),
    name: 'Github',
    link: 'https://github.com/an4morph',
    hint: 'Examples of my code as a front-end developer'
  },
  // {
  //   id: nanoid(),
  //   name: 'Figma',
  //   link: 'https://www.figma.com/file/GWxZlRVAKAHNcZ2V9rknjE/Polina-Akhmetova-%7C-Design-examples?node-id=0%3A1',
  //   hint: 'The Figma page was created to show an example of a workflow: creating prototypes, animations, and how the project is received by the developer'
  // },
  // {
  //   id: nanoid(),
  //   name: 'Dribbble',
  //   link: 'https://dribbble.com/an4morph',
  //   hint: 'Profile on dribbble. Pieces of projects that are not on Behance'
  // },
  {
    id: nanoid(),
    name: 'CV.pdf',
    link: 'https://an4morph.github.io/CV.pdf',
    hint: 'Classic resume in PDF format'
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
                external
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
