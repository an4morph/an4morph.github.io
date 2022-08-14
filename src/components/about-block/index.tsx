import Photo1 from "../../assets/img/polina-1.png"
import { Container, HiThere, Job, Line, Name, SecondP, ThirdP, Title } from "./styled"

export const AboutBlock: React.FC = () => {
  return (
    <Container>
      <Line>
        <img alt="polina" src={Photo1}/>
        <HiThere>
          Hi there! I’m Polina, and I’m designer.{`\n`} I specialize in UI/UX design. From market research and 
          wireframes to mockup and testing. My advantage is that I have a great background as a front-end 
          developer. I have been developing websites using ReactJS since 2017. And this helps me to see my 
          design as a developer, to understand how long and difficult it will be to develop it
        </HiThere>
      </Line>

      <Line>
        <Title>
          <Name>Polina Akhmetova</Name>
          <Job>UI/UX Designer | Frontend developer</Job>
        </Title>
        <SecondP>
          I started designing during the pandemic in 2020. At the university, I studied the design of the 
          architectural environment, and then transferred to software engineering. Now I have found an area 
          that combines my two passions - and this is design in IT.
        </SecondP>
      </Line>

      <ThirdP>
        Below on this site, you can learn more about my skills, see my portfolio and find contacts for communication
      </ThirdP>

    </Container>
  )
}
