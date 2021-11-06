import * as React from 'react'
import './button.css'
import { IButtonProps } from './types'

export const Button: React.FC<IButtonProps> = ({
  children,
  className,
  type,
  primary,
  secondary,
  disabled,
  backgroundColor,
  textColor,
  onClick,
}) => {
  const buttonType = (() => {
    if (primary) return 'button-primary'
    else if (secondary) return 'button-secondary'
    else if (disabled) return 'button-disabled'
    return 'button-default'
  })()

  const buttonClassName = ['button', className, buttonType].join(' ').trim()
  const isDisabled = disabled ? true : disabled
  const buttonStyle = {
    background: backgroundColor,
    color: textColor,
  }

  return (
    <button
      type={type}
      className={buttonClassName}
      disabled={isDisabled}
      onClick={onClick}
      style={buttonStyle}
    >
      {children}
    </button>
  )
}
