import * as React from 'react'
import './button.css'

interface ButtonProps {
  children: React.ReactNode | React.ReactNode[]
  type: 'button' | 'submit' | 'reset' | undefined
  disabled?: boolean | undefined
  btnType?: string | undefined
  primary?: boolean | undefined
  secondary?: boolean | undefined
  onClick?: () => void
  className?: string | undefined
  backgroundColor?: string
  textColor?: string
}

export const Button: React.FC<ButtonProps> = ({
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
