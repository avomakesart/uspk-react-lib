import React from 'react'
import { IToastProps } from './types'
import { useToast } from './hooks/useToast/index'

export const Toast: React.FC<IToastProps> = ({
  message,
  variant,
  title,
  position,
  duration,
  isOpen = false,
}) => {
  const { openToast, ToastComponent } = useToast({
    title: title,
    message: message,
    variant: variant,
    position: position,
    duration: duration,
  })

  React.useEffect(() => {
    openToast()
  }, [])

  return <>{isOpen && <ToastComponent />}</>
}
