import * as React from 'react'

export interface ITextFieldProps {
  autoComplete?: string | undefined
  label?: string
  htmlFor?: string
  required?: boolean
  id?: string | undefined
  error?: boolean | undefined
  errorMessage?: string | undefined
  name: string
  placeHolder?: string | undefined
  type: string
  onChange?: React.ChangeEventHandler<HTMLInputElement> | undefined
  onFocus?: React.FocusEventHandler<HTMLInputElement> | undefined
  onClick?: React.MouseEventHandler<HTMLInputElement> | undefined
  onBlur?: React.FocusEventHandler<HTMLInputElement> | undefined
  onKeyDown?: React.KeyboardEventHandler<HTMLInputElement> | undefined
  onKeyUp?: React.KeyboardEventHandler<HTMLInputElement> | undefined
  onPaste?: React.ClipboardEventHandler<HTMLInputElement> | undefined
  value: string | number | readonly string[] | undefined
  defaultValue?: string | number | readonly string[] | undefined
  pattern?: string | undefined
  min?: string | number | undefined
  max?: string | number | undefined
  minLength?: number | undefined
  maxLength?: number | undefined
  className?: string
  isReadOnly?: boolean | undefined
  labelStyle?: React.CSSProperties
  disabled?: boolean | undefined
  style?: React.CSSProperties
}
