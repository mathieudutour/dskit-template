import * as React from 'react'
import { Text as PrimitiveText } from 'react-primitives'
import styled, { css } from 'styled-components/primitives'

import colors from '../colors'

export const Size = {
  Title: 'Title',
  Headline: 'Headline',
  Heading: 'Heading',
  Subheading: 'Subheading',
  Normal: 'Normal',
  Small: 'Small',
  Caption: 'Caption',
}

export const TextAlign = {
  Left: 'Left',
  Center: 'Center',
  Right: 'Right',
}

export const Tone = {
  Neutral: 'Neutral',
  Secondary: 'Secondary',
}

const StyledCopy = styled(PrimitiveText)`
  margin: 0;
  font-family: 'Helvetica';
  color: ${props => {
    if (props.color) {
      return props.color.toString()
    }
    switch (props.tone) {
      case Tone.Secondary:
        return colors.grey.toString()
      case Tone.Neutral:
      default:
        return colors.darkGrey.toString()
    }
  }};

  ${props => {
    switch (props.size) {
      case Size.Title:
        return css`
          font-size: 34px;
          line-height: 41px;
          font-weight: ${props.light ? 300 : 400};
        `
      case Size.Headline:
        return css`
          font-size: 17px;
          line-height: 22px;
          font-weight: ${props.light ? 300 : 500};
        `
      case Size.Heading:
        return css`
          font-size: 17px;
          line-height: 44px;
          font-weight: ${props.light ? 300 : 500};
        `
      case Size.Subheading:
        return css`
          font-size: 18px;
          line-height: 27px;
          font-weight: ${props.light ? 300 : 400};
        `
      case Size.Small:
        return css`
          font-size: 14px;
          line-height: 18px;
          font-weight: ${props.light ? 300 : 400};
        `
      case Size.Caption:
        return css`
          font-size: 12px;
          line-height: 18px;
          font-weight: ${props.light ? 300 : 400};
        `
      case Size.Normal:
      default:
        return css`
          font-size: 18px;
          line-height: 27px;
          font-weight: ${props.light ? 300 : 400};
        `
    }
  }};

  ${props => {
    switch (props.textAlign) {
      case TextAlign.Center:
        return css`
          text-align: center;
        `
      case TextAlign.Right:
        return css`
          text-align: right;
        `
      case TextAlign.Left:
        return css`
          text-align: left;
        `
      default:
        return css`
          text-align: inherit;
        `
    }
  }};
`

const Text = props => {
  const {
    className,
    size,
    textAlign,
    color,
    children,
    light,
    tone,
    style,
  } = props
  return (
    <StyledCopy
      className={className}
      size={size}
      textAlign={textAlign}
      color={color}
      light={light}
      tone={tone}
      style={style}
    >
      {children}
    </StyledCopy>
  )
}

export default Text
