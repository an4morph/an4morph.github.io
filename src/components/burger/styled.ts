import styled, { css } from "styled-components"

import { Colors } from "../../styles/types"
import { MediaSizes } from "../../types"
import { media, MediaCreator } from "../../utils/devices"

export const BurgerButton = styled.button`
  position: fixed;
  top: 40px;
  right: 26px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 24px;
  cursor: pointer;

  & > .line {
    width: 28px;
    background-color: ${Colors.webBlack};

    ${
      MediaCreator((msize: MediaSizes) => css`
        height: ${({ theme }) => theme.thickness[msize]};
      `)
    }

    @media ${media.tabletS} {
      width: 38px;
    }
    @media ${media.tabletM} {
      width: 38px;
    }
    @media ${media.desktop} {
      width: 3.2vw;
    }
  }

  & > div:nth-child(1) {
    transform-origin: top left;
  }
  & > div:nth-child(3) {
    transform-origin: bottom left;
  }

  @media ${media.tabletS} {
    height: 34px;
  }
  @media ${media.tabletM} {
    height: 34px;
  }
  @media ${media.desktop} {
    top: 3vw;
    right: 3vw;
    height: 2.6vw;
  }
`