import * as React from 'react'
import Card from './index'
import { Layout } from 'dskit/components'

export default function CardDemo({ location }) {
  return (
    <Layout location={location}>
      <Card
        large
        title="Title"
        subtitle="Subtitle"
        description="description"
        background="https://images.unsplash.com/photo-1503764654157-72d979d9af2f?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=71cdddf5cc615224cf2c26614d20154d&auto=format&fit=crop&w=2106&q=80"
      />
    </Layout>
  )
}
