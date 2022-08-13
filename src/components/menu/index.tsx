import { AppLink } from "../app-link"
import { Burger } from "../burger"
import { Container, Items } from "./styled"

type Props = {
  isOpen: boolean
  onClose: () => void
}

const links = [
  { id: 1, text: 'About', href: '/' },
  { id: 2, text: 'Skills', href: '/skills' },
  { id: 3, text: 'CV & Portfolio', href: '/cv' },
  { id: 4, text: 'Contacts', href: '/contacts' },
]

export const Menu: React.FC<Props> = ({ isOpen, onClose }) => {
  return (
    <Container $isOpen={isOpen}>
      <Items>
        {
          links.map(({ href, id, text }) => (
            <div key={id}>
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
