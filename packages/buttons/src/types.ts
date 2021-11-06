import * as React from 'react'

export interface IButtonProps {
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
