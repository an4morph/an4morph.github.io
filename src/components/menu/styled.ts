import styled from "styled-components"

import { Colors } from "../../styles/types"
import { media } from "../../utils/devices"

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
  width: 80%;
  color: ${Colors.webWhite};
  padding: 40px 28px;
  transform: translateX(100%);
  z-index: 2;

  @media ${media.desktop} {
    width: 50%;
    padding: 3.4vw;
  }

  & .line {
    background-color: ${Colors.webWhite};
  }
`

export const Items = styled.div`
  display: flex;
  width: 100%;
  flex-wrap: wrap;

  & > div {
    width: 100%;
    padding-bottom: 30px;

    @media ${media.desktop} {
      padding-bottom: 2.4vw;
    }
  }

  & > div:last-child {
    padding-bottom: 0;
  }

  & a {
    display: inline-block;
    font-size: 28px;
    line-height: 28px;
    font-family: ${({ theme }) => theme.fonts.primary};
    text-transform: uppercase;
    font-weight: 300;

    &:hover {
      color: ${Colors.main};
    }

    @media ${media.tabletM} {
      font-size: 40px;
      line-height: 40px;
    }

    @media ${media.desktop} {
      font-size: 3.4vw;
      line-height: 3.4vw;
    }
  }
`