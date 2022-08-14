import { useRef } from "react"

import { nanoid } from "nanoid"

import { Btns, Container, Hint, LinkButton } from "./styled"
import { useAnimation } from "./useAnimation"

const links = [
  {
    id: nanoid(),
    name: 'Behance',
    link: 'https://google.com'
  },
  {
    id: nanoid(),
    name: 'Github',
    link: 'https://google.com'
  },
  {
    id: nanoid(),
    name: 'Figma',
    link: 'https://google.com'
  },
  {
    id: nanoid(),
    name: 'Dribble',
    link: 'https://google.com'
  },
  {
    id: nanoid(),
    name: 'CV.pdf',
    link: 'https://google.com'
  },
]

export const CVBlock: React.FC = () => {
  const trigger = useRef() as React.MutableRefObject<HTMLDivElement> 

  useAnimation(trigger)

  return (
    <Container ref={trigger}>
      <Hint>
        <p>Here is all the information you need to understand my professional experience.</p>
      </Hint>
      <Btns>
        {
          links.map(({ id, name, link }) => (
            <LinkButton
              key={id}
              link={link}
            >
              {name}
            </LinkButton>
          ))
        }
      </Btns>
    </Container>
  )
}
