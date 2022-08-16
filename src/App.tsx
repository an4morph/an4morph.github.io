import { AboutBlock } from "./components/about-block"
import { ContactsBlock } from "./components/contacts-block"
import { CVBlock } from "./components/cv-block"
import { Nav } from "./components/nav"
import { SkillsBlock } from "./components/skills-block"
import { Container } from "./styles/App.styled"

const App: React.FC = () => {
  return (
    <Container>
      <Nav>
        <AboutBlock />
        <SkillsBlock />
        <CVBlock />
        <ContactsBlock />
      </Nav>
    </Container>
  )
}

export default App
