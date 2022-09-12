import { useRef } from "react"

import { useSmoothAppearance } from "../../hooks/useSmoothAppearance"
import { Container } from "./styled"

export const ExperienceBlock: React.FC = () => {
  const trigger = useRef() as React.MutableRefObject<HTMLDivElement> 

  useSmoothAppearance(trigger, [
    { selector: '.exp', direction: 'top', start: 'top bottom' },
  ])

  return (
    <Container id="experience-block" ref={trigger}>
      <div className="exp">experience-block</div>
    </Container>
  )
}
