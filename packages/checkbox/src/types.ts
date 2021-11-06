import * as React from 'react'

export interface ICheckboxProps {
  onCheck: React.ChangeEventHandler<HTMLInputElement>
  checked: boolean | undefined
  name: string | undefined
  id?: string | undefined
  className?: string | undefined
  label?: string | undefined
  htmlLabelFor?: string | undefined
}
