import styled, { css } from "styled-components"

import { Colors } from "../../styles/types"
import { MediaSizes } from "../../types"
import { media, MediaCreator } from "../../utils/devices"
import { Button } from "../button"
import { RadialGradient } from "../radial-gradient"

export const Container = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  padding-bottom: 10vw;
  padding-top: 10vw;

  & .hint, & .buttons {
    opacity: 0;
  }
`

export const Hint = styled.div`
  display: none;
  justify-content: center;
  align-items: center;
  position: relative;
  height: 100%;

  & p {
    position: absolute;
    width: 75%;
    font-size: 18px;
    font-family: ${({ theme }) => theme.fonts.normal};
    line-height: 140%;
    letter-spacing: 0.02em;
    color: ${Colors.webBlack};
    white-space: pre-line;

    ${
      MediaCreator((msize: MediaSizes) => css`
        font-size: ${({ theme }) => theme.paragraph[msize]};
      `)
    }
  }

  @media ${media.tabletM} {
    display: flex;
    flex: 4;
    justify-content: flex-start;
  }
  @media ${media.desktop} {
    display: flex;
    flex: 4;
  }
  @media (hover: none) {
    display: none;
  }
`

export const Btns = styled.div`
  display: flex;
  flex-direction: column;
  flex: 3;
  & a, & button {
    width: 100%;
  }
`

export const LinkButton = styled(Button)`
  margin-bottom: 26px;
  width: 100%;

  & a, & button {
    width: 100%;
  }
  
  @media ${media.desktop} {
    margin-bottom: 2vw;
  }
`

export const Gradient = styled(RadialGradient)`
  display: none;
  position: absolute;

  width: 50vw;
  height: 36vw;
  top: auto;
  left: -2vw;
  
  z-index: -1;

  @media ${media.tabletM} {
    display: block;
  }

  @media ${media.desktop} {
    display: block;
  }
`