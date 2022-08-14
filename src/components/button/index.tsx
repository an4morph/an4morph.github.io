import { AppLink } from '../app-link'
import { StyledButton } from './styled'

type Props = {
  children: React.ReactNode
  type?: JSX.IntrinsicElements['button']['type']
  onClick?: () => void
  className?: string
  link?: string
}

export const Button = ({
  children,
  type = 'button',
  onClick,
  className,
  link,
}: Props): JSX.Element => {
  const button = (
    <StyledButton
      className={className}
      onClick={onClick}
      type={type}
    >
      <span>{children}</span>
    </StyledButton>
  )
  return link ? (
    <AppLink
      href={link}
    >
      {button}
    </AppLink>
  ): button
}