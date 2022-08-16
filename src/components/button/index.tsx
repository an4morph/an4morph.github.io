import { useRef, useState } from 'react'

import { AppLink } from '../app-link'
import { Background, StyledButton } from './styled'
import { useAnimation } from './useAnimation'

type Props = {
  children: React.ReactNode
  type?: JSX.IntrinsicElements['button']['type']
  onClick?: () => void
  className?: string
  link?: string
  external?: boolean
}

export const Button = ({
  children,
  type = 'button',
  onClick,
  className,
  link,
  external
}: Props): JSX.Element => {
  const [isHover, setHover] = useState(false)
  const trigger = useRef() as React.MutableRefObject<HTMLButtonElement> 

  useAnimation(trigger, isHover)

  const button = (
    <StyledButton
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
    </StyledButton>
  )
  return link ? (
    <AppLink
      href={link}
      target={external ? '_blank' : '_self'}
    >
      {button}
    </AppLink>
  ): button
}