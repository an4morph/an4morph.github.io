import { StyledButton } from './styled'

type Props = {
  children: React.ReactNode
  type?: JSX.IntrinsicElements['button']['type']
  onClick?: () => void
  className?: string
}

export const Button = ({
  children,
  type = 'button',
  onClick,
  className,
}: Props): JSX.Element => {
  return (
    <StyledButton
      className={className}
      onClick={onClick}
      type={type}
    >
      <span>{children}</span>
    </StyledButton>
  )
}