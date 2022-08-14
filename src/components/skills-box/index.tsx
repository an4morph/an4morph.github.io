import { Container, Title } from "./styled"

type Props = {
  title: string
  className?: string
}

export const SkillsBox: React.FC<Props> = ({ title, className }) => {
  return (
    <div
      className={className}
    >
      <Title>
        {title}
      </Title>
      <Container>
        fdsf
      </Container>
    </div>
  )
}
