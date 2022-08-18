import styled from "styled-components"

import { Colors } from "../../styles/types"
import { media } from "../../utils/devices"
import { SkillsBox } from "../skills-box"

export const Container = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 8vw;
  margin-bottom: 8vw;
  flex-direction: column;

  @media ${media.desktop} {
    flex-direction: row;
  }

  & .design, & .frontend {
    opacity: 0;
  }
`

export const StyledSkillsBox = styled(SkillsBox)`
  width: 100%;

  &:nth-child(2) {
    margin-top: 6vw;
    margin-left: 0;
    
    @media ${media.desktop} {
      margin-left: 5vw;
    }
  }

  @media ${media.desktop} {
    width: 32vw;
  }
`