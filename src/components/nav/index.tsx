import { useState } from "react"

import { Burger } from "../burger"
import { Menu } from "../menu"
import { Container, Content, Name } from "./styled"

export const Nav: React.FC = ({ children }) => {
  const [isOpenMenu, setOpenMenu] = useState(false)

  const toggleMenu = () => {
    setOpenMenu(p => !p)
  }

  return (
    <Container>
      <Name>About</Name>
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
