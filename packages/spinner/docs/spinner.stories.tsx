import * as React from 'react'
import { Spinner } from '../src'
import mdx from './spinner.mdx'

export default {
  title: 'Components/Loaders/Spinner',
  parameters: {
    tags: ['spinner', 'uspk', 'react'],
    docs: {
      page: mdx,
    },
  },
}

export const Default = () => {
  return (
    <Spinner color="gray" speed="1s" emptyColor="#e2e2e2" label="Hello world" />
  )
}
