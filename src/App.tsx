import { AboutBlock } from "./components/about-block"
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
      </Nav>
    </Container>
  )
}

export default App
