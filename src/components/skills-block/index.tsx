import { useRef } from "react"

import { Container, StyledSkillsBox } from "./styled"
import { useAnimation } from "./useAnimation"

export const SkillsBlock: React.FC= () => {
  const trigger = useRef() as React.MutableRefObject<HTMLDivElement> 

  useAnimation(trigger)

  return (
    <Container
      ref={trigger}
    >
      <StyledSkillsBox title="Design" />
      <StyledSkillsBox title="Frontend" />
    </Container>
  )
}
