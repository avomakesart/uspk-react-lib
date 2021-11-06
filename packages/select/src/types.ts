import * as React from 'react'

export interface ISelectInputProps {
  label?: string
  handleChange: React.ChangeEventHandler<HTMLSelectElement>
  data: string[]
  selectedValue: string | string[]
  defaultValue: string
  name: string
  required?: boolean
  error?: boolean | undefined
  errorMessage?: string | undefined
  className?: string
  disabled?: boolean | undefined
  multiple?: boolean | undefined
}
