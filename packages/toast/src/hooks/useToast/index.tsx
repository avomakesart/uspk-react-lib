/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react'
import { Typography } from '../../../../typography/src'
import { ErrorIcon, InfoIcon, SuccessIcon, WarnIcon } from '../../assets/icons'
import '../../toast.css'
import { IToastHookProps } from '../../types'

const DEFAULT_DURATION = 3000

export const useToast = ({
  title,
  message,
  variant,
  style,
  position,
  duration = DEFAULT_DURATION,
  isOpen = false,
}: IToastHookProps) => {
  const toastRef = React.useRef<any>(null)
  const [isShown, setIsShown] = React.useState(isOpen)
  // const toastRef = useRef<any>(null)

  const openToast = () => {
    toastRef.current.classList.add('show')
    // setIsShown(!isShown)
    setTimeout(() => {
      toastRef.current.classList.remove('show')
      // setIsShown(false)
    }, duration)
  }

  let toastStyle: React.CSSProperties | undefined, icon: any | null | undefined

  switch (variant) {
    case 'success':
      toastStyle = {
        backgroundColor: '#f0fdf4',
        borderLeft: '5px solid #2db92d',
      }
      icon = <SuccessIcon />
      break
    case 'error':
      toastStyle = {
        backgroundColor: '#FEF2F2',
        borderLeft: '5px solid #f04444',
      }
      icon = <ErrorIcon />
      break
    case 'info':
      toastStyle = {
        backgroundColor: '#EFF6FF',
        borderLeft: '5px solid #323ed1',
      }
      icon = <InfoIcon color="#323ed1" />
      break
    case 'warning':
      toastStyle = {
        backgroundColor: '#fefce8',
        borderLeft: '5px solid #ffcc00',
      }
      icon = <WarnIcon />
      break
    default:
      break
  }

  const toastCls = [position, 'snackbar'].join(' ').trim()

  const ToastComponent = () => (
    <>
      <div
        ref={toastRef}
        className={toastCls}
        style={{ ...toastStyle, ...style }}
      >
        <div className="content">
          <div className="icon-container">{icon}</div>
          <div className="message-container">
            <h6 className="toast-title">{title}</h6>
            <p className="toast-message">{message}</p>
          </div>
        </div>
      </div>
    </>
  )
  return { openToast, ToastComponent }
}
