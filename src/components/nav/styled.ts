import styled from "styled-components"

import { Colors } from "../../styles/types"

export const Container = styled.div`
  display: flex;
  width: 100%;
`

export const config = {
  topGap: 40,
  name: {
    gap: 30,
    font: 60,
  },
  burger: {
    h: 34,
    w: 38,
    th: 1.5,
    gap: 40,
  }
}

export const Name = styled.div`
  position: fixed;
  top: ${`${config.topGap}px`};
  left: ${`${config.name.gap}px`};
  font-family: ${({ theme }) => theme.fonts.primary};
  font-size: ${`${config.name.font}px`};
  font-weight: 200;
  transform: rotate(-90deg) translateX(-100%);
  transform-origin: left top;
  line-height: ${`${config.name.font}px`};
`

export const Burger = styled.div`
  position: fixed;
  top: ${`${config.topGap}px`};
  right: ${`${config.burger.gap}px`};

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 34px;

  & > div {
    width: 38px;
    height: 2px;
    background-color: ${Colors.webBlack};
  }
`

export const Content = styled.div`
  width: 100%;
  margin-top: ${`${config.topGap}px`};
  margin-left: ${`${(config.name.gap * 2) + config.name.font}px`};
  margin-right: ${`${(config.burger.gap * 2) + config.burger.w}px`};
`