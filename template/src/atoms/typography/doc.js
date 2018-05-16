import * as React from 'react'
import { Layout } from 'dskit/components'
import { View } from 'react-primitives'
import Text, { Size as CopySize, Tone } from './index'

const Copy = ({ size }) => {
  return (
    <View>
      <Text size={CopySize.Small} tone={Tone.Secondary}>
        {size}
      </Text>
      <Space size={SpaceSize.XS} />
      <Text size={CopySize[size]}>
        The quick brown fox jumps over the lazy dog
      </Text>
      <Space size={SpaceSize.M} />
    </View>
  )
}

const CopyDemo = ({ location }) => {
  return (
    <Layout location={location}>
      {Object.keys(CopySize).map(size => <Copy size={size} />)}
    </Layout>
  )
}

export default CopyDemo
