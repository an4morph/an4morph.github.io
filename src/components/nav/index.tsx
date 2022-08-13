import { Burger, Container, Content, Name } from "./styled"

export const Nav: React.FC = ({ children }) => {
  return (
    <Container className="navvvv">
      <Name>About</Name>
      <Content>
        {children}
      </Content>
      <Burger>
        <div />
        <div />
        <div />
      </Burger>
    </Container>
  )
}
