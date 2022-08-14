import { useRef } from "react"

import { nanoid } from "nanoid"

import { Skill } from "../../types"
import { Container, StyledSkillsBox } from "./styled"
import { useAnimation } from "./useAnimation"

const designSkills: Skill[] = [
  {
    id: nanoid(),
    name: 'HTML / CSS',
    desc: 'Responsive layout, pre- post- processors and etc'
  },
  {
    id: nanoid(),
    name: 'JavaScript',
    desc: 'Responsive layout, pre- post- processors and etc',
    isFav: true,
  },
  {
    id: nanoid(),
    name: 'React',
    desc: 'Responsive layout, pre- post- processors and etc'
  },
  {
    id: nanoid(),
    name: 'TypeScript',
    desc: 'Responsive layout, pre- post- processors and etc'
  },
  {
    id: nanoid(),
    name: 'Webpack',
    desc: 'Responsive layout, pre- post- processors and etc',
    isFav: true,
  },
]

export const SkillsBlock: React.FC= () => {
  const trigger = useRef() as React.MutableRefObject<HTMLDivElement> 

  useAnimation(trigger)

  return (
    <Container
      ref={trigger}
    >
      <StyledSkillsBox 
        skills={designSkills}
        title="Design"
      />
      <StyledSkillsBox
        skills={designSkills}
        title="Frontend"
      />
    </Container>
  )
}
