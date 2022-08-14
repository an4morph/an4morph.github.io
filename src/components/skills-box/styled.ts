import styled, { css } from "styled-components"

import { Colors } from "../../styles/types"
import { MediaSizes } from "../../types"
import { media, MediaCreator } from "../../utils/devices"

export const Container = styled.div`
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
  display: flex;
  align-items: center;

  & svg {
    margin-left: 1vw;
    color: ${Colors.like};
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