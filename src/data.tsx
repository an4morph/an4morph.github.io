import { nanoid } from "nanoid"

import { Skill } from "./types"

export const about = [
  <>
    Hi there! I’m Polina, and I’m frontend developer.{`\n`} My core technology is React.
    I have been working with react since 2017 and with TypeScript since 2020. 
    Have experience of various cooperation: outsourcing, outstaffing, freelance, start-up. 
    Can work both alone and in a team (but I like it more in a team)
  </>,
  <>
    The most interesting areas for me at the moment are graphics, animation and games. 
    The main thing in work for me is good relations between colleagues, a good atmosphere and legal official work.
  </>,
  <>
    Below on this site, you can learn more about my skills, get my CV and find contacts for communication
  </>
]

export const skills: { title: string, items: Skill[] }[] = [
  {
    title: 'Frontend',
    items: [
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
        name: 'Project from scratch',
        desc: 'Can build a project from scratch for specific needs. Build under dev and prod',
        isFav: true,
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
  }
]

export const portfolioLinks = [
  {
    id: nanoid(),
    name: 'Github',
    link: 'https://github.com/an4morph',
    hint: 'Examples of my code as a front-end developer'
  },
  {
    id: nanoid(),
    name: 'CV.pdf',
    link: 'https://an4morph.github.io/Akhmetova_Polina_CV.pdf',
    hint: 'Classic resume in PDF format'
  },
]