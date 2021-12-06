import React from 'react'
import { Container } from '../src'
// import { DxUiIcon } from '../../'

export default {
  title: 'Components/Container',
  component: Container,
  parameters: {
    tags: ['container', 'dxui', 'react'],
    // docs: {
    //   page: mdx,
    // },
  },
}

export const Default = () => {
  return <Container>Hello</Container>
}
