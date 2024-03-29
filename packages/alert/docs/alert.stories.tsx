import * as React from 'react'
import { Alert } from '../src'

export default {
  title: 'Components/Alert',
  parameters: {
    tags: ['button', 'uspk', 'react'],
    // docs: {
    //   page: mdx,
    // },
  },
}

export const InfoAlert = () => {
  return (
    <Alert
      type="info"
      closeButton={{ onClick: () => console.log('Hello world') }}
    >
      Hey this is a random message
    </Alert>
  )
}

export const SuccessAlert = () => {
  return (
    <Alert
      type="success"
      closeButton={{ onClick: () => console.log('Hello world') }}
    >
      Hey this is a random message
    </Alert>
  )
}

export const WarningAlert = () => {
  return (
    <Alert
      type="warning"
      closeButton={{ onClick: () => console.log('Hello world') }}
    >
      Hey this is a random message
    </Alert>
  )
}

export const ErrorAlert = () => {
  return (
    <Alert
      type="error"
      closeButton={{ onClick: () => console.log('Hello world') }}
    >
      Hey this is a random message
    </Alert>
  )
}
