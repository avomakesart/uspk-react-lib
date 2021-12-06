import * as React from 'react'

export type ICheckboxProps = {
  id?: string | undefined
  name?: string
  value?: string
  label?: React.ReactNode | string
  labelIcon?: React.ReactNode
  helperText?: React.ReactNode
  errorText?: React.ReactNode
  error?: boolean | undefined
  checked?: boolean | string
  disabled?: boolean
  required?: boolean
  className?: string
  labelClassName?: string
  checkClassName?: string
  indeterminate?: boolean
  dir?: string
} & React.InputHTMLAttributes<HTMLInputElement>
