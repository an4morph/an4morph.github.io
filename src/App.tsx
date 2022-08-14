import { AboutBlock } from "./components/about-block"
import { Nav } from "./components/nav"
import { Container } from "./styles/App.styled"

const App: React.FC = () => {
  return (
    <Container>
      <Nav>
        <AboutBlock />
      </Nav>
    </Container>
  )
}

export default App
