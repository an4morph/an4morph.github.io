import { useRef } from "react"

import { nanoid } from "nanoid"

import { useSmoothAppearance } from "../../hooks/useSmoothAppearance"
import { Skill } from "../../types"
import { Container, StyledSkillsBox } from "./styled"

const designSkills: Skill[] = [
  {
    id: nanoid(),
    name: 'UI / UX',
    desc: 'Development of beautiful and user-friendly interfaces based on customer requirements',
    isFav: true,
  },
  {
    id: nanoid(),
    name: 'UX audit and optimization',
    desc: 'Improvement of the existing site, analysis of UX errors and ways to eliminate them',
  },
  {
    id: nanoid(),
    name: 'Prototyping and Wireframes',
    desc: 'Creating a base for the future application for its subsequent styling',
    isFav: true,
  },
  {
    id: nanoid(),
    name: 'Adaptation for all screens',
    desc: 'Creating a convenient responsive website for any screen size',
    isFav: true,
  },
  {
    id: nanoid(),
    name: 'Design system development',
    desc: "Design solutions for a large platform and/or for a group of applications of one company"
  },
]

const frontendSkills: Skill[] = [
  {
    id: nanoid(),
    name: 'HTML, CSS, JS',
    desc: 'Basic technologies of any front-end developer. Responsive, pixel perfect, fast and clear'
  },
  {
    id: nanoid(),
    name: 'React + Redux + Thunk + TypeScript',
    desc: 'Favorite technology stack for large commercial projects',
    isFav: true,
  },
  {
    id: nanoid(),
    name: 'Animation',
    desc: 'CSS transitions, JS animation frame, GSAP, PaperJS or HTML Canvas'
  },
  {
    id: nanoid(),
    name: 'Architecture (middle)',
    desc: 'Can build a project from scratch for specific needs. Build under dev and prod',
    isFav: true,
  },
  {
    id: nanoid(),
    name: 'Basic backend knowledge',
    desc: "Can create simple NodeJS + ExpressJS API. It can be useful when you need to start developing a front-end without a back-end"
  },
  {
    id: nanoid(),
    name: 'Metorship and public speaking',
    desc: "3 years of teaching and curriculum development experience for students of different levels."
  },
  {
    id: nanoid(),
    name: 'Task delegation',
    desc: "Work in a team and deleagte tasks to intern/junior developers, based on their level of knowledge and personal preferences"
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
      className="skills-block"
      ref={trigger}
    >
      <StyledSkillsBox 
        className="design"
        skills={designSkills}
        title="Design"
      />
      <StyledSkillsBox
        className="frontend"
        skills={frontendSkills}
        title="Frontend"
      />
    </Container>
  )
}
