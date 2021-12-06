import React from 'react'
import { Button } from '../../buttons/src/index'
import { useToast } from '../src/hooks/useToast'
import { Toast } from '../src'

export default {
  title: 'Components/Toast',
  parameters: {
    tags: ['toast', 'uspk', 'react'],
    // docs: {
    //   page: mdx,
    // },
  },
}

export const DefaultToast = () => {
  const { openToast, ToastComponent } = useToast({
    title: 'Hey dude',
    message: `Free and Premium themes, UI Kit's, templates and landing pages built with Tailwind CSS, HTML & Next.js.`,
    variant: 'error',
    duration: 5000,
    position: 'bottom-center',
  })

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
      }}
    >
      <Button type="button" primary onClick={() => openToast()}>
        Show Snackbar{' '}
      </Button>
      <ToastComponent />
    </div>
  )
}

export const ToastWithComponent = () => {
  const [isShown, setIsShown] = React.useState(false)

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
      }}
    >
      <Button type="button" primary onClick={() => setIsShown(!isShown)}>
        Show Snackbar{' '}
      </Button>
      <Toast message="hello world" variant="success" isOpen={isShown} />
    </div>
  )
}
