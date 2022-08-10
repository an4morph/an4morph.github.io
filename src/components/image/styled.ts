import styled from "styled-components"

import { Colors } from "../../styles/types"

const gap = "1.6vw"

export const Frame = styled.div`
  border: ${`2px solid ${Colors.webBlack}`};
  position: absolute;
  top: 0;
  right: 0;
`

export const Container = styled.div<{ $gap?: string }>`
  position: relative;
  padding-top: ${({ $gap }) => $gap || gap};
  padding-right: ${({ $gap }) => $gap || gap};
  width: 24vw;

  & > img {
    width: 100%;
    vertical-align: middle;
  }

  & ${Frame} {
    bottom: ${({ $gap }) => $gap || gap};
    left: ${({ $gap }) => $gap || gap};
  }
`