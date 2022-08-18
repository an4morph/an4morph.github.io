import { useRef } from "react"

import { nanoid } from "nanoid"

import { useSmoothAppearance } from "../../hooks/useSmoothAppearance"
import { Skill } from "../../types"
import { Container, StyledSkillsBox } from "./styled"

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

  useSmoothAppearance(trigger, [
    { selector: '.design', direction: 'right', start: 'top 80%' },
    { selector: '.frontend', direction: 'left' },
  ])

  return (
    <Container
      ref={trigger}
    >
      <StyledSkillsBox 
        className="design"
        skills={designSkills}
        title="Design"
      />
      <StyledSkillsBox
        className="frontend"
        skills={designSkills}
        title="Frontend"
      />
    </Container>
  )
}
