import styled from "styled-components"

import { Colors } from "../../styles/types"

export const Container = styled.div`
  position: relative;

  & img {
    width: 24vw;
    margin-top: 3vw;
    margin-left: 6vw;
  }

  & p {
    font-size: 1.2vw;
    font-family: ${({ theme }) => theme.fonts.normal};
    line-height: 140%;
    letter-spacing: 0.02em;
    color: ${Colors.webBlack};
    white-space: pre-line;
  }
`

export const Line = styled.div`
  display: flex;
`

export const Title = styled.div`
  font-family: ${({ theme }) => theme.fonts.primary};
  margin-top: 3.6vw;
  margin-left: 2vw;
`

export const Name = styled.div`
  font-size: 4vw;
  text-transform: uppercase;
  line-height: 4vw;
  white-space: nowrap;
  margin-bottom: 1.2vw;
`

export const Job = styled.div`
  font-size: 1.4vw;
  line-height: 1.4vw;
  white-space: nowrap;
`

export const HiThere = styled.p`
  width: 40vw;
  margin-top: 6.8vw;
  margin-left: 10vw;
`

export const SecondP = styled.p`
  width: 100%;
  margin-left: 10vw;
  margin-top: 3vw;
`

export const ThirdP = styled.p`
  width: 41vw;
  margin-left: 10vw;
  margin-top: 3vw;
  margin-bottom: 3vw;
`