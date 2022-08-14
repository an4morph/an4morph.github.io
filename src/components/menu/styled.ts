import styled from "styled-components"

import { Colors } from "../../styles/types"
import { config } from "../../utils/config"

export const Background = styled.div`
  width: 100%;
  top: 0;
  right: 0;
  height: 100%;
  background-color: ${Colors.webBlack};
  position: absolute;
`

export const Container = styled.div<{ $isOpen: boolean }>`
  position: fixed;
  top: 0;
  right: 0;
  display: flex;
  width: 50%;
  color: ${Colors.webWhite};
  padding-top: ${`${config.layout.padding.t}px`};
  padding-left: ${`${config.layout.padding.l}px`};
  padding-right: ${`${config.layout.padding.r}px`};
  transform: translateX(100%);
`

export const Items = styled.div`
  display: flex;
  width: 100%;
  flex-wrap: wrap;
  padding-bottom: ${`${config.layout.padding.t - config.layout.padding.l}px`};

  & > div {
    width: 100%;
    padding-bottom: ${`${config.layout.padding.l}px`};
  }

  & a {
    display: inline-block;
    font-size: ${`${config.menu.font}px`};
    line-height: ${`${config.menu.font}px`};
    font-family: ${({ theme }) => theme.fonts.primary};
    text-transform: uppercase;

    &:hover {
      color: ${Colors.main};
    }
  }
`