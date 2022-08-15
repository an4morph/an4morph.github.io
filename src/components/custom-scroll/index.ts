import styled, { css } from 'styled-components'

import { Colors } from '../../styles/types'
import { MediaSizes } from '../../types'
import { MediaCreator } from '../../utils/devices'

export const CustomScroll = styled.div<{ $color?: Colors }>`
  overflow-y: auto;

  ::-webkit-scrollbar {
    width: ${({ theme }) => theme.scroll};
    
    ${
      MediaCreator((msize: MediaSizes) => css`
        outline: ${({ theme }) => `${theme.thickness[msize]} solid ${Colors.webBlack}`};
      `)
    }
  }

  ::-webkit-scrollbar-thumb {
    background-color: ${Colors.webBlack};

    ${
      MediaCreator((msize: MediaSizes) => css`
        border: ${({ theme }) => `${theme.thickness[msize]} solid ${Colors.webWhite}`};
      `)
    }
  }
`