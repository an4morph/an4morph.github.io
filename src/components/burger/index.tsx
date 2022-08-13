import { BurgerButton } from "./styled"

type Props = {
  isOpen: boolean
  onClick: () => void
  className?: string
}

export const Burger: React.FC<Props> = ({ isOpen, onClick, className }) => {
  return (
    <BurgerButton
      $isOpen={isOpen}
      className={className} 
      onClick={onClick}
    >
      <div />
      <div />
      <div />
    </BurgerButton>
  )
}
