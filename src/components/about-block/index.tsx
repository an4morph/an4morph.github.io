import { useRef } from "react"

import Photo1 from "../../assets/img/polina-1.png"
import { about } from "../../data"
import { SmoothItem, useSmoothAppearance } from "../../hooks/useSmoothAppearance"
import { 
  Container, FirstLine, FirstText, Gradient, Job, MiddleTitle, 
  Name, SecondLine, SecondText, ThirdText, TopTitle
} from "./styled"

const TitleBlock = ({ top }: { top?: boolean }) => {
  const TitleWrap = top ? TopTitle : MiddleTitle
  return (
    <TitleWrap className="title">
      <Name>Polina Akhmetova</Name>
      <Job>Frontend developer (React)</Job>
    </TitleWrap>
  )
}

const withStagger = (items: SmoothItem[], timing: number) => {
  return items.map((item, index) => ({
    ...item,
    delay: timing * index
  }))
}

const TEXT = about

export const AboutBlock: React.FC = () => {
  const trigger = useRef() as React.MutableRefObject<HTMLDivElement>

  useSmoothAppearance(trigger, withStagger([
    { selector: '.image', direction: 'top', trigger: trigger.current },
    { selector: '.title', direction: 'right', trigger: trigger.current, start: 'top bottom' },
    { selector: '.first-text', direction: 'left', trigger: trigger.current, start: 'top bottom' },
    { selector: '.second-text', direction: 'left', trigger: trigger.current, start: 'top bottom' },
    { selector: '.third-text', direction: 'left' },
  ], 0.1))

  return (
    <Container id="about-block" ref={trigger}>
      <FirstLine>
        <div>
          <img alt="polina" className="image" src={Photo1}/>
          <TitleBlock top />
        </div>
        
        <FirstText className="first-text">
          {TEXT[0]}
        </FirstText>
      </FirstLine>

      <SecondLine>
        <TitleBlock />
        <SecondText className="second-text">
          <Gradient />
          {TEXT[1]}
        </SecondText>
      </SecondLine>

      <ThirdText className="third-text">
        {TEXT[2]}
      </ThirdText>

    </Container>
  )
}
