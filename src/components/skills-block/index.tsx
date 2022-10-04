import { useRef } from "react"

import { skills } from "../../data"
import { useSmoothAppearance } from "../../hooks/useSmoothAppearance"
import { Container, StyledSkillsBox } from "./styled"

export const SkillsBlock: React.FC= () => {
  const trigger = useRef() as React.MutableRefObject<HTMLDivElement> 

  useSmoothAppearance(trigger, [
    { selector: '.box-1', direction: 'right', start: 'top 80%' },
    { selector: '.box-2', direction: 'left' },
  ])

  return (
    <Container
      id="skills-block"
      ref={trigger}
    >
      {
        skills.map((box, index) => (
          <StyledSkillsBox 
            className={`box-${index + 1}`}
            skills={skills[index].items}
            title={skills[index].title}
          />
        ))
      }
    </Container>
  )
}
