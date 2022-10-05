import { useRef } from "react"

import { nanoid } from "nanoid"

import { skills } from "../../data"
import { useSmoothAppearance } from "../../hooks/useSmoothAppearance"
import { Container, StyledSkillsBox } from "./styled"

export const SkillsBlock: React.FC= () => {
  const trigger = useRef() as React.MutableRefObject<HTMLDivElement> 

  useSmoothAppearance(trigger, [
    { selector: '.box-1', direction: 'right', start: 'top 80%' },
  ])

  return (
    <Container
      id="skills-block"
      ref={trigger}
    >
      {
        skills.map((box, index) => (
          <StyledSkillsBox 
            $wide={skills.length === 1}
            className={`box-${index + 1}`}
            key={nanoid()}
            skills={skills[index].items}
            title={skills[index].title}
          />
        ))
      }
    </Container>
  )
}
