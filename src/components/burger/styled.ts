import styled from "styled-components"

import { Colors } from "../../styles/types"
import { config } from "../../utils/config"

export const BurgerButton = styled.div<{ $isOpen: boolean }>`
  position: fixed;
  top: ${`${config.layout.padding.t}px`};
  right: ${`${config.layout.padding.r}px`};

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 34px;
  cursor: pointer;

  & > div {
    width: 38px;
    height: 2px;
    background-color: blue;
  }
`