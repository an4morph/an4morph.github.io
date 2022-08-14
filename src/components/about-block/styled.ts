import styled from "styled-components"

import { Colors } from "../../styles/types"
import { media } from "../../utils/devices"

export const Container = styled.div`
  position: relative;

  & img {
    width: 80%;
    margin-top: 3vw;
    margin-left: 0;
    align-self: self-start;

    @media ${media.tabletM} {
      width: 24vw;
    }

    @media ${media.desktop} {
      width: 24vw;
      margin-left: 6vw;
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

export const Title = styled.div`
  font-family: ${({ theme }) => theme.fonts.primary};
  margin-top: 3.6vw;
  margin-left: 0;

  @media ${media.desktop} {
    margin-left: 2vw;
  }
`

export const TopTitle = styled(Title)`
  display: block;

  @media ${media.tabletM} {
    display: none;
  }
  @media ${media.desktop} {
    display: none;
  }
`

export const MiddleTitle = styled(Title)`
  display: none;

  @media ${media.tabletM} {
    display: block;
  }
  @media ${media.desktop} {
    display: block;
  }
`

export const Name = styled.div`
  font-size: 40px;
  text-transform: uppercase;
  line-height: 40px;
  white-space: nowrap;
  margin-bottom: 1.2vw;

  @media ${media.desktop} {
    font-size: 4vw;
    line-height: 4vw;
  }
`

export const Job = styled.div`
  font-size: 18px;
  line-height: 18px;
  white-space: nowrap;

  @media ${media.desktop} {
    font-size: 1.4vw;
    line-height: 1.4vw;
  }
`

export const FirstText = styled.p`
  width: 100%;
  margin-top: 6.8vw;
  margin-left: 0;
  margin-right: 0;

  @media ${media.tabletM} {
    margin-left: 4.6vw;
  }

  @media ${media.desktop} {
    margin-left: 10vw;
    margin-right: 2vw;
  }
`

export const SecondText = styled.p`
  width: 100%;
  margin-left: 0;
  margin-top: 3vw;

  @media ${media.desktop} {
    margin-left: 10vw;
  }
`

export const ThirdText = styled.p`
  width: 100%;
  margin-left: 0;
  margin-top: 3vw;
  margin-bottom: 3vw;

  @media ${media.tabletM} {
    width: auto;
    margin-left: 16vw;
  }

  @media ${media.desktop} {
    width: 41vw;
    margin-left: 10vw;
  }
`