import styled from "styled-components"

import { Colors } from "../../styles/types"

export const Container = styled.div`
  position: relative;

  & img {
    width: 320px;
  }

  & p {
    font-size: 18px;
    font-family: ${({ theme }) => theme.fonts.normal};
    line-height: 140%;
    letter-spacing: 0.02em;
    color: ${Colors.webBlack}
  }
`

export const Line = styled.div`
  display: flex;
`

export const Title = styled.div`
  font-family: ${({ theme }) => theme.fonts.primary};
`

export const Name = styled.div`
  font-size: 50px;
  text-transform: uppercase;
  line-height: 50px;
  white-space: nowrap;
  margin-bottom: 16px;
`

export const Job = styled.div`
  font-size: 18px;
  line-height: 18px;
  white-space: nowrap;
`