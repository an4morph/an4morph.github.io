import { AboutBlock } from "./components/about-block"
import { Nav } from "./components/nav"
import { SkillsBlock } from "./components/skills-block"
import { Container } from "./styles/App.styled"

const App: React.FC = () => {
  return (
    <Container>
      <Nav>
        <AboutBlock />
        <SkillsBlock />
      </Nav>
    </Container>
  )
}

export default App
