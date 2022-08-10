import Photo1 from "./assets/img/polina-1.png"
import { Container, MainImage } from "./styles/App.styled"

const App: React.FC = () => {
  return (
    <Container>
      <MainImage alt="polina" src={Photo1}/>
    </Container>
  )
}

export default App
