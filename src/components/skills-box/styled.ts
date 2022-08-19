import styled, { css } from "styled-components"

import { Colors } from "../../styles/types"
import { MediaSizes } from "../../types"
import { media, MediaCreator } from "../../utils/devices"
import { CustomScroll } from "../custom-scroll"

export const Container = styled(CustomScroll)`
  background-color: ${Colors.webWhite};
  color: ${Colors.webBlack};
  padding: 26px;
  width: 100%;
  overflow: auto;
  
  ${
    MediaCreator((msize: MediaSizes) => css`
      border: ${({ theme }) => `${theme.thickness[msize]} solid ${Colors.webBlack}`};
    `)
  }

  @media ${media.desktop} {
    height: 36vw;
    padding: 2.3vw;
  }
`

export const SkillContainer = styled.div`
  padding: 18px 0;

  @media ${media.desktop} {
    padding: 1vw 0;
  }
`

export const Title = styled.div`
  font-family: ${({ theme }) => theme.fonts.primary};
  text-transform: uppercase;
  font-weight: 300;
  line-height: 160%;
  font-size: 36px;

  @media ${media.desktop} {
    font-size: 3vw;
  }
`

export const Name = styled.h3`
  font-family: ${({ theme }) => theme.fonts.primary};
  font-weight: 300;
  line-height: 160%;
  position: relative;

  & svg {
    margin-left: 1vw;
    color: ${Colors.like};
    position: absolute;
    bottom: 9px;

    @media ${media.tabletM} {
      bottom: 0.8vw;
    }

    @media ${media.desktop} {
      bottom: 0.8vw;
    }
  }

  ${
    MediaCreator((msize: MediaSizes) => css`
      font-size: ${({ theme }) => theme.h3[msize]};
    `)
  }
`

export const Desc = styled.p`
  line-height: 160%;
  ${
    MediaCreator((msize: MediaSizes) => css`
      font-size: ${({ theme }) => theme.paragraph[msize]};
    `)
  }
`

export const Wrapper = styled.div`
  position: relative;
`

export const ScrollGradient = styled.div<{ $top?: boolean }>`
  height: 3.3vw;
  width: 100%;
  position: absolute;
  bottom: 0;
  left: 0;
  z-index: 2;
  background: ${({ $top }) => {
    if (!$top) return `linear-gradient(180deg, ${Colors.webWhite}00 0%, ${Colors.webWhite} 90%);`
    return `linear-gradient(180deg, ${Colors.webWhite} 0%, ${Colors.webWhite}00 90%);`
  }};

  ${
    MediaCreator((msize: MediaSizes) => css<{ $top?: boolean }>`
      bottom: ${({ theme, $top }) => $top ? 'auto' : theme.thickness[msize]};
      top: ${({ theme, $top }) => $top ? theme.thickness[msize] : 'auto'};
      left: ${({ theme }) => theme.thickness[msize]};
      width: ${({ theme }) => `calc(100% - (${theme.thickness[msize]} * 3) - ${theme.scroll})`};
    `)
  }
`