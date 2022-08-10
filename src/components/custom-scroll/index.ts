import styled from 'styled-components'

import { Colors } from '../../styles/types'

export const CustomScroll = styled.div<{ $color?: Colors }>`
  overflow-y: auto;

  ::-webkit-scrollbar {
    width: 8px;
  }

  ::-webkit-scrollbar-track {
    width: 8px;
  }

  ::-webkit-scrollbar-thumb {
    background-color: green;
  }
`