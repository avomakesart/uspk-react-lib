import * as React from 'react'
import { Button } from '../src'
import mdx from './button.mdx'
import { CheckmarkAlt } from '../src/assets/icons/checkmark-alt'
import { CheckMark } from '../src/assets/icons/checkmark'

export default {
  title: 'Components/Button',
  parameters: {
    tags: ['button', 'uspk', 'react'],
    docs: {
      page: mdx,
    },
  },
}

export const Default = () => {
  return <Button type="button">Click me!</Button>
}

export const Primary = () => {
  return (
    <Button type="button" primary onClick={() => console.log('Hey dude')}>
      Click me!
    </Button>
  )
}

export const Secondary = () => {
  return (
    <Button type="button" secondary onClick={() => console.log('Hey dude')}>
      Click me!
    </Button>
  )
}

export const Disabled = () => {
  return (
    <Button type="button" disabled onClick={() => console.log('Hey dude')}>
      Click me!
    </Button>
  )
}

export const CustomBackground = () => {
  return (
    <Button
      type="button"
      backgroundColor="rgba(67, 56, 202, 1)"
      onClick={() => console.log('Hey dude')}
    >
      Click me!
    </Button>
  )
}

export const WithLoadingSpinner = () => {
  return (
    <Button type="button" primary btnState="processing">
      Click me!
    </Button>
  )
}

export const SuccessButton = () => {
  const [, setIsSending] = React.useState(false)
  const [process, setProcess] = React.useState<
    'initial' | 'success' | 'processing'
  >('initial')

  const handleSendEmail = async () => {
    setIsSending(false)
    setProcess('processing')
    setTimeout(() => {
      setIsSending(true)
      setProcess('success')
    }, 1000)
  }

  return (
    <Button type="button" onClick={handleSendEmail} primary btnState={process}>
      PAY NOW
    </Button>
  )
}

export const LeftIconButton = () => {
  return (
    <Button
      type="button"
      onClick={() => console.log('Hi there')}
      leftIcon={<CheckMark width="1.5em" />}
      iconSpace="5px"
      primary
    >
      PAY NOW
    </Button>
  )
}


export const RightIconButton = () => {
  return (
    <Button
      type="button"
      onClick={() => console.log('Hi there')}
      rightIcon={<CheckMark width="1.5em" />}
      iconSpace="5px"
      secondary
    >
      PAY NOW
    </Button>
  )
}
