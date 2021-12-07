// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import cls from 'classnames'
import * as React from 'react'
import './alert.css'
import { ErrorIcon, InfoIcon, SuccessIcon, WarnIcon } from './assets/icons'
import { CloseIcon } from './assets/icons/close-icon'
import { AlertProps } from './types'

export const Alert: React.FC<AlertProps> = ({
  className,
  type,
  closeButton,
  closeButtonLabel = 'close alert',
  children,
  ...rest
}) => {
  const icons = {
    info: InfoIcon,
    success: SuccessIcon,
    warning: WarnIcon,
    error: ErrorIcon,
  }

  const AlertStatusIcon = icons[type]

  const alertClasses = cls(
    'alert--container',
    ['alert--with__icon'],
    {
      [`alert--type_${type}`]: type,
      [`alert--no-close__btn`]: !closeButton,
    },
    className,
  )

  let closeBtnEl
  if (closeButton) {
    const { className: closeButtonCls, ...otherProps } = closeButton

    const closeButtonClass = cls('alert--close__btn', closeButtonCls)

    closeBtnEl = closeButton && (
      <span>
        <button
          type="button"
          className={closeButtonClass}
          style={{ fontSize: '1.5rem' }}
          {...otherProps}
        >
          <CloseIcon />
          <span className="alert--icon_label">{closeButtonLabel}</span>
        </button>
      </span>
    )
  }

  return (
    <div className={alertClasses} {...rest}>
      <div className="alert--wrapper">
        <div className="alert--icon-wrapper">
          {icons && <AlertStatusIcon className="alert--with__icon" />}
        </div>
        {children}
        {closeBtnEl}
      </div>
    </div>
  )
}
