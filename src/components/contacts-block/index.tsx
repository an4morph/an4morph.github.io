import { useEffect, useRef, useState } from "react"

import { nanoid } from "nanoid"

import Photo2 from "../../assets/img/polina-2.png"
import { gsap } from "../../utils/gsap"
import { Container, FirstLine, Gradient, LinkButton, Wrapper } from "./styled"
import { useAnimation } from "./useAnimation"

const links = [
  {
    id: nanoid(),
    name: 'Telegram',
    link: 'https://google.com',
  },
  {
    id: nanoid(),
    name: 'Linkedin',
    link: 'https://google.com',
  },
  {
    id: nanoid(),
    name: 'Email',
    link: 'https://google.com',
  }
]

const title = 'Let’s communicate!'
const desc = 'The fastest way I will answer you is in the telegram chat (@an4morph). But you can always write me an email or message in Linkedin'

export const ContactsBlock: React.FC = () => {
  const trigger = useRef() as React.MutableRefObject<HTMLDivElement> 

  useAnimation(trigger)

  return (
    <Container ref={trigger}>
      <Wrapper />
      <FirstLine>
        <div>
          <h3>{title}</h3>
          <p>{desc}</p>
        </div>
        <img alt="polina with laptop" src={Photo2} />
      </FirstLine>
      <div>
        {
          links.map(({ id, name, link }) => (
            <LinkButton 
              key={id} 
              link={link}
            >
              {name}
            </LinkButton>
          ))
        }
      </div>
    </Container>
  )
}
