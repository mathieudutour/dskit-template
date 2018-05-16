import * as React from 'react'
import { Touchable, View } from 'react-primitives'
import styled, { css } from 'styled-components/primitives'
import colors from '../colors'
import Text, { TextAlign, Size } from '../typography'

const StyledButton = styled(View)`
	padding: 10px 30px;
	min-width: 200px;
	width: 343px;
	height: 44px;
	border-radius: 8px;

	${props =>
    props.secondary
      ? `
		background: ${colors.primaryLight.toString()};
	`
      : `
		background: ${colors.primary.toString()};
	`}

	${p =>
    p.disabled
      ? `
		background: ${colors.lightGrey.toString()};
	`
      : ''}

	${p =>
    p.applePay
      ? `
		background: ${colors.black.toString()};
	`
      : ''}

	${props =>
    props.onPress && !props.disabled
      ? css`
          cursor: pointer;
        `
      : ''};
`

const Button = props => {
  const color = props.disabled
    ? colors.darkGrey
    : props.secondary
      ? colors.primary
      : colors.white
  return (
    <Touchable>
      <StyledButton {...props}>
        {props.applePay && (
          <Text color={color} size={Size.Headline} textAlign={TextAlign.Center}>
            🍏Pay
          </Text>
        )}
        {props.text &&
          !props.applePay && (
            <Text
              color={color}
              size={Size.Headline}
              textAlign={TextAlign.Center}
            >
              {props.text}
            </Text>
          )}
      </StyledButton>
    </Touchable>
  )
}

export default Button
