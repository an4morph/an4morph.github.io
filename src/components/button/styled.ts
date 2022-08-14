import styled, { css } from 'styled-components'

import { Colors } from '../../styles/types'
import { MediaSizes } from '../../types'
import { media, MediaCreator } from '../../utils/devices'

export const StyledButton = styled.button`
  padding: 10px;
  font-family: ${({ theme }) => theme.fonts.primary};
  text-transform: uppercase;
  font-weight: 300;
  line-height: 160%;
  font-size: 36px;

  ${
    MediaCreator((msize: MediaSizes) => css`
      border: ${({ theme }) => `${theme.thickness[msize]} solid ${Colors.webBlack}`};
    `)
  }

  @media ${media.desktop} {
    font-size: 3vw;
  }
`