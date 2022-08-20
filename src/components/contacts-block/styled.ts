import styled, { css } from "styled-components"

import { Colors } from "../../styles/types"
import { MediaSizes } from "../../types"
import { media, MediaCreator } from "../../utils/devices"
import { AppLink } from "../app-link"
import { ButtonWhite } from "../button/white"
import { RadialGradient } from "../radial-gradient"

export const Wrapper = styled.div`
  position: absolute;
  inset: 0;
  background-color: ${Colors.webBlack};
  width: 100vw;
  height: 100%;
  z-index: -1;

  margin-left: -26px;

  @media ${media.tabletS} {
    margin-left: -84px;
  }

  @media ${media.tabletM} {
    margin-left: -10.6vw;
  }

  @media ${media.desktop} {
    margin-left: -9.3vw;
  }
`

export const FirstText = styled.div`
  display: flex;
  flex-direction: column;
  padding-right: 0;
  position: relative;

  @media ${media.tabletM} {
    padding-right: 3vw;
  }
  @media ${media.desktop} {
    padding-right: 3vw;
  }
`

export const Container = styled.div`
  background-color: ${Colors.webBlack};
  color: ${Colors.webWhite};
  position: relative;
  padding-top: 10vw;
  padding-bottom: 10vw;

  & h3 {
    font-family: ${({ theme }) => theme.fonts.primary};
    font-size: 40px;
    font-weight: 300;
    text-transform: uppercase;

    @media ${media.tabletM} {
      font-size: 30px;
    }
    @media ${media.desktop} {
      font-size: 3vw;
    }
  }

  & p {
    font-size: 18px;
    font-family: ${({ theme }) => theme.fonts.normal};
    line-height: 140%;
    letter-spacing: 0.02em;
    align-self: flex-end;
    margin-top: 40px;
    width: 100%;
    z-index: 2;

    ${
      MediaCreator((msize: MediaSizes) => css`
        font-size: ${({ theme }) => theme.paragraph[msize]};
      `)
    }
    @media ${media.desktop} {
      width: 70%;
    }
  }

  & img {
    width: 60vw;
    align-self: flex-start;
    margin-top: 3vw;

    @media ${media.tabletM} {
      width: 24vw;
    }
    @media ${media.desktop} {
      width: 24vw;
    }
  }

  & .min-screen {
    display: block;

    @media ${media.tabletM} {
      display: none;
    }
    @media ${media.desktop} {
      display: none;
    }
  }
  & .max-screen {
    display: none;

    @media ${media.tabletM} {
      display: block;
    }
    @media ${media.desktop} {
      display: block;
    }
  }

  & .title, & .desc, & .btns-1, & .btns-2, & .btns-3, & .img2 {
    opacity: 0;
  }
`

export const Gradient = styled(RadialGradient)`
  position: absolute;
  width: 40vw;
  height: 20vw;
  transform: rotate(-30deg);
  top: 0;
  opacity: 0.6;
  z-index: 0;
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

export const LinkButton = styled(ButtonWhite)`
  margin-bottom: 40px;

  @media ${media.tabletM} {
    margin-bottom: 3vw;
  }
  @media ${media.desktop} {
    margin-bottom: 3vw;
  }
`

export const Btns = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 60px;

  & > * {
    width: 100%;

    @media ${media.tabletM} {
      width: 40%;
    }
    @media ${media.desktop} {
      width: 40%;
    }
  }

  @media ${media.tabletM} {
    margin-top: 6vw;
  }
  @media ${media.desktop} {
    margin-top: 6vw;
  }

  & button {
    width: 100%;
  }

  & > *:nth-child(1) {
    align-self: flex-start;
  }
  & > *:nth-child(2) {
    align-self: center;
  }
  & > *:nth-child(3) {
    align-self: flex-end;
  }
`

export const StyledTgLink = styled(AppLink)`
  color: ${Colors.main}!important;
  &:hover {
    opacity: 0.8;
  }
`

