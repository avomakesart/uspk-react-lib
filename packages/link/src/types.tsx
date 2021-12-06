import * as React from 'react'

export type LinkProps = {
  secondary?: boolean
  inverse?: boolean
  className?: string
  children?: React.ReactNode | React.ReactNode[]
  leftIcon?: React.ReactElement
  upperCase?: boolean,
  lowerCase?: boolean
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  as?: any
  onClick: () => void
  buttonType?: string
  isLoading?: boolean
}
