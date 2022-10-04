import styled from "styled-components"

import { AboutBlock } from "./components/about-block"
import { ContactsBlock } from "./components/contacts-block"
import { CVBlock } from "./components/cv-block"
import { Nav } from "./components/nav"
import { SkillsBlock } from "./components/skills-block"
import { Container } from "./styles/App.styled"

const Dev = styled.div`
  display: flex;
  justify-content: center;
  font-size: 4vw;
  height: 100vh;
  align-items: center;
`

const App: React.FC = () => {
  return (
    <Container>
      <Nav>
        <AboutBlock />
        <SkillsBlock />
        {/*
        <CVBlock />
        <ContactsBlock /> */}
      </Nav>

      {/* <Dev>Sorry, website under reconstruction</Dev> */}
    </Container>
  )
}

export default App
