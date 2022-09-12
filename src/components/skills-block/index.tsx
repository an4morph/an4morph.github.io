import { useRef } from "react"

import { nanoid } from "nanoid"

import { useSmoothAppearance } from "../../hooks/useSmoothAppearance"
import { Skill } from "../../types"
import { Container, StyledSkillsBox } from "./styled"

const skills1: Skill[] = [
  {
    id: nanoid(),
    name: 'Loremipsum',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, dando eiusmod tempor incididunt'
  },
  {
    id: nanoid(),
    name: 'Loremipsum',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt',
    isFav: true,
  },
  {
    id: nanoid(),
    name: 'Loremipsum',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt'
  },
  {
    id: nanoid(),
    name: 'Loremipsum',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, dando eiusmod tempor incididunt',
    isFav: true,
  },
  {
    id: nanoid(),
    name: 'Loremipsum',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt'
  },
  {
    id: nanoid(),
    name: 'Loremipsum',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt'
  },
  {
    id: nanoid(),
    name: 'Loremipsum',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt'
  },
]

const skills2: Skill[] = [
  {
    id: nanoid(),
    name: 'Loremipsum',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt'
  },
  {
    id: nanoid(),
    name: 'Loremipsum',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt',
    isFav: true,
  },
  {
    id: nanoid(),
    name: 'Loremipsum',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt'
  },
  {
    id: nanoid(),
    name: 'Loremipsum',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, dando eiusmod tempor incididunt',
    isFav: true,
  },
  {
    id: nanoid(),
    name: 'Loremipsum',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt'
  },
  {
    id: nanoid(),
    name: 'Loremipsum',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt'
  },
  {
    id: nanoid(),
    name: 'Loremipsum',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt'
  },
]

export const SkillsBlock: React.FC= () => {
  const trigger = useRef() as React.MutableRefObject<HTMLDivElement> 

  useSmoothAppearance(trigger, [
    { selector: '.skills1', direction: 'right', start: 'top 80%' },
    { selector: '.skills2', direction: 'left' },
  ])

  return (
    <Container
      id="skills-block"
      ref={trigger}
    >
      <StyledSkillsBox 
        className="skills1"
        skills={skills1}
        title="Hard"
      />
      <StyledSkillsBox
        className="skills2"
        skills={skills2}
        title="Soft"
      />
    </Container>
  )
}
