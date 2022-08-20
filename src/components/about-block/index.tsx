import { useRef } from "react"

import Photo1 from "../../assets/img/polina-1.png"
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
      <Job>UI/UX Designer | Frontend developer</Job>
    </TitleWrap>
  )
}

const withStagger = (items: SmoothItem[], timing: number) => {
  return items.map((item, index) => ({
    ...item,
    delay: timing * index
  }))
}

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
          Hi there! I’m Polina, and I’m designer.{`\n`} I specialize in UI/UX design. From market research and 
          wireframes to mockup and testing. My advantage is that I have a great background as a front-end 
          developer. I have been developing websites using ReactJS since 2017. And this helps me to see my 
          design as a developer, to understand how long and difficult it will be to develop it
        </FirstText>
      </FirstLine>

      <SecondLine>
        <TitleBlock />
        <SecondText className="second-text">
          <Gradient />
          At university, I studied the Design of Architectural Environment, 
          and then move to Software Engineering. Then I found a profession that combines my two 
          passions - design in IT. And I started my design career in 2020.
        </SecondText>
      </SecondLine>

      <ThirdText className="third-text">
        Below on this site, you can learn more about my skills, see my portfolio and find contacts for communication
      </ThirdText>

    </Container>
  )
}
