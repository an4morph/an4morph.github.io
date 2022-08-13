import styled from "styled-components"

import { Colors } from "../../styles/types"
import { config } from "../../utils/config"

export const Container = styled.div`
  display: flex;
  width: 100%;
`

export const Name = styled.div`
  position: fixed;
  top: ${`${config.layout.padding.t}px`};
  left: ${`${config.layout.padding.l}px`};
  font-family: ${({ theme }) => theme.fonts.primary};
  font-size: ${`${config.layout.name}px`};
  font-weight: 200;
  transform: rotate(-90deg) translateX(-100%);
  transform-origin: left top;
  line-height: ${`${config.layout.name}px`};
  color: ${Colors.webBlack};
`

export const Content = styled.div`
  width: 100%;
  margin-top: ${`${config.layout.padding.t}px`};
  margin-left: ${`${(config.layout.padding.l * 2) + config.layout.name}px`};
  margin-right: ${`${(config.layout.padding.r * 2) + config.layout.burger.w}px`};
`