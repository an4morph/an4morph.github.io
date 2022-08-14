import styled from "styled-components"

import { Colors } from "../../styles/types"
import { media } from "../../utils/devices"
import { RadialGradient } from "../radial-gradient"

export const Container = styled.div`
  position: relative;

  & img {
    width: 80%;
    margin-top: 0;
    margin-left: 0;
    align-self: self-start;

    @media ${media.tabletM} {
      width: 21vw;
      margin-top: 4vw;
      margin-left: 5vw;
    }

    @media ${media.desktop} {
      width: 21vw;
      margin-left: 6vw;
      margin-top: 3vw;
    }
  }

  & p {
    font-size: 18px;
    font-family: ${({ theme }) => theme.fonts.normal};
    line-height: 140%;
    letter-spacing: 0.02em;
    color: ${Colors.webBlack};
    white-space: pre-line;

    @media ${media.desktop} {
      font-size: 1.4vw;
    }
  }
`

export const FirstLine = styled.div`
  display: flex;
  flex-direction: column;

  @media ${media.tabletM} {
    flex-direction: row;
  }
  @media ${media.desktop} {
    flex-direction: row;
  }
`

export const SecondLine = styled.div`
  display: flex;
  flex-direction: column;

  @media ${media.desktop} {
    flex-direction: row;
  }
`

export const TopTitle = styled.div`
  display: block;
  margin-top: 6vw;

  @media ${media.tabletM} {
    display: none;
  }
  @media ${media.desktop} {
    display: none;
  }
`

export const MiddleTitle = styled.div`
  display: none;

  @media ${media.tabletM} {
    display: block;
    margin-top: 5.8vw;
  }
  @media ${media.desktop} {
    display: block;
    margin-top: 4vw;
    margin-left: 2vw;
  }
`

export const Name = styled.div`
  font-family: ${({ theme }) => theme.fonts.primary};
  font-size: 40px;
  text-transform: uppercase;
  line-height: 120%;
  margin-bottom: 2vw;
  font-weight: 300;

  @media ${media.tabletM} {
    margin-bottom: 1vw;
  }
  @media ${media.desktop} {
    font-size: 3.2vw;
    line-height: 3.2vw;
    white-space: nowrap;
    margin-bottom: 1vw;
  }
`

export const Job = styled.div`
  font-size: 18px;
  line-height: 140%;

  @media ${media.desktop} {
    font-size: 1.2vw;
    line-height: 1.2vw;
    white-space: nowrap;
  }
`

export const FirstText = styled.p`
  width: 100%;
  margin-top: 6.8vw;
  margin-left: 0;
  margin-right: 0;

  @media ${media.tabletM} {
    margin-left: 5.7vw;
  }

  @media ${media.desktop} {
    margin-left: 10vw;
    margin-right: 2vw;
  }
`

export const SecondText = styled.p`
  position: relative;
  width: 100%;
  margin-left: 0;
  margin-top: 6vw;

  @media ${media.tabletM} {
    width: 80%;
    margin-left: 4.8vw;
  }

  @media ${media.desktop} {
    margin-left: 12vw;
    margin-top: 2vw;
  }
`

export const ThirdText = styled.p`
  width: 100%;
  margin-left: 0;
  margin-top: 6vw;
  margin-bottom: 6vw;

  @media ${media.tabletM} {
    width: auto;
    margin-left: 16vw;
  }

  @media ${media.desktop} {
    width: 41vw;
    margin-left: 10vw;
  }
`

export const Gradient = styled(RadialGradient)`
  position: absolute;
  top: -20vw;
  left: auto;
  right: -16vw;
  width: 80vw;
  height: 76vw;
  z-index: -1;

  @media ${media.tabletM} {
    width: 40vw;
    height: 36vw;
  }

  @media ${media.desktop} {
    width: 40vw;
    height: 36vw;
    top: -10vw;
    left: -6vw;
  }
`