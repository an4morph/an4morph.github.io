import styled from "styled-components"

import { Colors } from "../../styles/types"
import { config } from "../../utils/config"

export const Container = styled.div<{ $isOpen: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  width: 100%;
  background-color: ${Colors.webBlack};
  color: ${Colors.webWhite};
  padding-top: ${`${config.layout.padding.t}px`};
  padding-left: ${`${config.layout.padding.l}px`};
  padding-right: ${`${config.layout.padding.r}px`};

  visibility: ${({ $isOpen }) => $isOpen ? 'visible' : 'hidden'};
`

export const Items = styled.div`
  display: flex;
  width: 100%;
  flex-wrap: wrap;
  padding-bottom: ${`${config.layout.padding.t - config.layout.padding.l}px`};

  & > div {
    width: 50%;
    padding-bottom: ${`${config.layout.padding.l}px`};
  }

  & a {
    display: inline-block;
    font-size: ${`${config.menu.font}px`};
    line-height: ${`${config.menu.font}px`};
    font-family: ${({ theme }) => theme.fonts.primary};
    text-transform: uppercase;
    transition-duration: 250ms;

    &:hover {
      color: ${Colors.main};
      transition-duration: 250ms;
    }
  }
`