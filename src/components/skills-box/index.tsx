import { ReactComponent as Heart } from '../../assets/icons/heart.svg'
import { Skill } from "../../types"
import { Container, Desc, Name, ScrollGradient, SkillContainer, Title, Wrapper } from "./styled"

type Props = {
  title: string
  className?: string
  skills: Skill[]
}

export const SkillsBox: React.FC<Props> = ({ title, className, skills }) => {
  return (
    <div
      className={className}
    >
      <Title>
        {title}
      </Title>
      <Wrapper>
        <ScrollGradient $top/>
        <ScrollGradient />
        <Container>
          {
            skills.map(({ id, name, desc, isFav }) => (
              <SkillContainer key={id}>
                <Name>• {name}{isFav ? <Heart /> : null}</Name>
                <Desc>{desc}</Desc>
              </SkillContainer>
            ))
          }
        </Container>
      </Wrapper>
    </div>
  )
}
