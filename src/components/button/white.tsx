import { useRef, useState } from 'react'

import { AppLink } from '../app-link'
import { Background, StyledButtonWhite } from './styled'
import { useAnimation } from './useAnimation'

type Props = {
  children: React.ReactNode
  type?: JSX.IntrinsicElements['button']['type']
  onClick?: () => void
  className?: string
  link?: string
}

export const ButtonWhite = ({
  children,
  type = 'button',
  onClick,
  className,
  link,
}: Props): JSX.Element => {
  const [isHover, setHover] = useState(false)
  const trigger = useRef() as React.MutableRefObject<HTMLButtonElement> 

  useAnimation(trigger, isHover)

  const button = (
    <StyledButtonWhite
      className={className}
      onClick={onClick}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      ref={trigger}
      type={type}
    >
      <Background className="background"/>
      <span>{children}</span>
      <div className="arrow" />
    </StyledButtonWhite>
  )
  return link ? (
    <AppLink
      href={link}
    >
      {button}
    </AppLink>
  ): button
}