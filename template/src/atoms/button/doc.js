import * as React from 'react'
import { Layout } from 'dskit/components'
import Button from './index'

const ButtonDemo = ({ location }) => {
  return (
    <Layout location={location}>
      <Button text="Primary" />
      <Button secondary text="Secondary" />
      <Button disabled text="Disabled" />
      <Button applePay />
    </Layout>
  )
}

export default ButtonDemo
