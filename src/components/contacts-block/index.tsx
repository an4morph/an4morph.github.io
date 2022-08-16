import { useEffect, useRef, useState } from "react"

import { nanoid } from "nanoid"

import Photo2 from "../../assets/img/polina-2.png"
import { gsap } from "../../utils/gsap"
import { AppLink } from "../app-link"
import { Btns, Container, FirstLine, FirstText, Gradient, LinkButton, StyledTgLink, Wrapper } from "./styled"
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

const TgLink = () => <StyledTgLink href="https://t.me/an4morph" target="_blank">@an4morph</StyledTgLink>

const title = 'Let’s communicate!'

export const ContactsBlock: React.FC = () => {
  const trigger = useRef() as React.MutableRefObject<HTMLDivElement> 

  useAnimation(trigger)

  return (
    <Container ref={trigger}>
      <Wrapper />
      <FirstLine>
        <FirstText>
          <Gradient />
          <h3>{title}</h3>
          <img alt="polina with laptop" className="min-screen" src={Photo2} />
          <p>
            The fastest way I will answer you is in the telegram chat &#40;<TgLink />&#41;. 
            But you can always write me an email or message in Linkedin
          </p>
        </FirstText>
        <img alt="polina with laptop" className="max-screen" src={Photo2} />
      </FirstLine>
      <Btns>
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
      </Btns>
    </Container>
  )
}
