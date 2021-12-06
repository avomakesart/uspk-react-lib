import * as React from 'react'

export type IButtonProps = {
  children: React.ReactNode | React.ReactNode[]
  type: 'button' | 'submit' | 'reset' | undefined
  disabled?: boolean | undefined
  btnType?: string | undefined
  primary?: boolean | undefined
  secondary?: boolean | undefined
  inverse?: boolean | undefined
  isFullWidth?: boolean | undefined
  className?: string | undefined
  backgroundColor?: string
  textColor?: string
  loading?: boolean
  btnState?: 'success' | 'processing' | 'initial'
  icon?: boolean
  as?: React.ElementType
  iconComponent?: React.ReactNode | React.ReactNode[]
  leftIcon?: React.ReactElement
  rightIcon?: React.ReactElement
  iconSpace?: string
} & React.ButtonHTMLAttributes<HTMLButtonElement> &
  React.AnchorHTMLAttributes<HTMLAnchorElement>
