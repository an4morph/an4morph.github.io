import styled from "styled-components"

import { Colors } from "../../styles/types"
import { media } from "../../utils/devices"

export const Container = styled.div`
  display: flex;
  width: 100%;
  overflow-x: hidden;
  width: 100vw;

  & .nav-contacts {
    color: ${Colors.webWhite};
  }
`

export const Name = styled.div`
  opacity: 0;
  display: none;
  position: fixed;
  top: 40px;
  left: 26px;
  
  transform: rotate(-90deg) translateX(-100%);
  transform-origin: left top;

  color: ${Colors.webBlack};
  text-transform: uppercase;
  font-family: ${({ theme }) => theme.fonts.primary};
  font-weight: 200;
  font-size: 36px;
  line-height: 36px;

  @media ${media.tabletS} {
    display: block;
  }

  @media ${media.tabletM} {
    display: block;
    font-size: 5vw;
    line-height: 5vw;
  }

  @media ${media.desktop} {
    display: block;
    font-size: 3.2vw;
    line-height: 3.2vw;
    top: 3vw;
    left: 2.4vw;
  }
`

export const Content = styled.div`
  width: 100%;
  margin-left: 26px;
  margin-right: 26px;

  @media ${media.tabletS} {
    margin-left: 84px;
    margin-right: 80px;
  }

  @media ${media.tabletM} {
    margin-left: 10.6vw;
    margin-right: 9vw;
  }

  @media ${media.desktop} {
    margin-left: 9.3vw;
    margin-right: 9vw;
  }
`