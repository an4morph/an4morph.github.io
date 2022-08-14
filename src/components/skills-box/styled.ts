import styled, { css } from "styled-components"

import { Colors } from "../../styles/types"
import { MediaSizes } from "../../types"
import { media, MediaCreator } from "../../utils/devices"

export const Container = styled.div`
  background-color: ${Colors.webWhite};
  color: ${Colors.webBlack};
  padding: 2.3vw;
  width: 100%;
  
  ${
    MediaCreator((msize: MediaSizes) => css`
      border: ${({ theme }) => `${theme.thickness[msize]} solid ${Colors.webBlack}`};
    `)
  }

  @media ${media.desktop} {
    height: 36vw;
  }
`

export const Title = styled.div`
  font-family: ${({ theme }) => theme.fonts.primary};
  text-transform: uppercase;
  font-weight: 300;
  line-height: 160%;
  font-size: 36px;

  @media ${media.desktop} {
    font-size: 3vw;
  }
`