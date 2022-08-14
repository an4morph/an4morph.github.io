import styled, { css } from "styled-components"

import { Colors } from "../../styles/types"
import { MediaSizes } from "../../types"
import { media, MediaCreator } from "../../utils/devices"

export const Container = styled.div`
  background-color: ${Colors.webWhite};
  color: ${Colors.webBlack};
  padding: 20px;
  width: 30vw;
  height: 33vw;
  
  ${
    MediaCreator((msize: MediaSizes) => css`
      border: ${({ theme }) => `${theme.thickness[msize]} solid ${Colors.webBlack}`};
    `)
  }
`

export const Title = styled.div`
  font-family: ${({ theme }) => theme.fonts.primary};
  text-transform: uppercase;
`