import { useRef } from "react"

import { AppLink } from "../app-link"
import { Burger } from "../burger"
import { Background, Container, Items } from "./styled"
import { useAnimation } from "./useAnimation"

type Props = {
  isOpen: boolean
  onClose: () => void
}

const links = [
  { id: 1, text: 'About', href: '#about-block' },
  { id: 2, text: 'Skills', href: '#skills-block' },
  { id: 3, text: 'CV & Portfolio', href: '#cv-block' },
  { id: 4, text: 'Contacts', href: '#contacts-block' },
]

export const Menu: React.FC<Props> = ({ isOpen, onClose }) => {
  const trigger = useRef() as React.MutableRefObject<HTMLDivElement> 

  useAnimation(trigger, isOpen)

  return (
    <Container $isOpen={isOpen} ref={trigger}>
      <Background className="background"/>
      <Items>
        {
          links.map(({ href, id, text }) => (
            <div 
              className="link-item" 
              key={id} 
              onClick={onClose}
              role="none"
            >
              <AppLink href={href}>{text}</AppLink>
            </div>
          ))
        }
      </Items>
      <Burger 
        isOpen={isOpen} 
        onClick={onClose}
      />
    </Container>
  )
}
