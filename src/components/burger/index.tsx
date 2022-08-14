import { useRef } from "react"

import { BurgerButton } from "./styled"
import { useAnimation } from "./useAnimation"

type Props = {
  isOpen: boolean
  onClick: () => void
  className?: string
}

export const Burger: React.FC<Props> = ({ isOpen, onClick, className }) => {
  const trigger = useRef() as React.MutableRefObject<HTMLButtonElement> 

  useAnimation(trigger, isOpen)

  return (
    <BurgerButton
      className={className}
      onClick={onClick} 
      ref={trigger}
    >
      <div className="line line-1" />
      <div className="line line-2" />
      <div className="line line-3" />
    </BurgerButton>
  )
}
