import styled from "styled-components"

import { Colors } from "../../styles/types"
import { media } from "../../utils/devices"
import { SkillsBox } from "../skills-box"

export const Container = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 8vw;
  margin-bottom: 8vw;
`

export const StyledSkillsBox = styled(SkillsBox)`
  &:nth-child(2) {
    margin-top: 6vw;
    margin-left: 5vw;
  }
`