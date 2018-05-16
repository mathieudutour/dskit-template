import * as React from 'react'
import { View, Touchable } from 'react-primitives'
import styled from 'styled-components/primitives'
import colors from '../../atoms/colors'
import Text, { Size, TextAlign } from '../../atoms/typography'

const StyledCard = styled(View)`
  margin-top: 16px;
  margin-left: 16px;
  margin-right: 16px;
  width: 343px;
  border-radius: 8px;
  background: #000000;
  height: ${p => (p.large ? 300 : 160)}px;
`

const Card = props => {
  const color = colors.white
  return (
    <Touchable onPress={props.onPress}>
      <StyledCard {...props}>
        <View>
          {props.subtitle && (
            <Text color={color} size={Size.Heading} textAlign={TextAlign.Left}>
              {props.subtitle}
            </Text>
          )}
          <Text color={color} size={Size.Heading} textAlign={TextAlign.Left}>
            {props.title}
          </Text>
        </View>
        {props.description && (
          <View>
            <Text color={color} size={Size.Heading} textAlign={TextAlign.Left}>
              {props.description}
            </Text>
          </View>
        )}
      </StyledCard>
    </Touchable>
  )
}

export default Card
