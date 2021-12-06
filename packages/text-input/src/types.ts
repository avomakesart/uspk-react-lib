/* eslint-disable @typescript-eslint/no-explicit-any */
import * as React from 'react'

export type PrefixSuffixProps = {
  prefix?: string
  suffix?: string
  prefixClassName?: string
  suffixClassName?: string
}

export type ITextInputProps = {
  setFocus?: boolean
  disabled?: boolean
  error?: boolean
  name: string
  className?: string
  inputClassName?: string
  labelClassName?: string
  successText?: string | string[] | React.ReactNode | React.ReactNodeArray
  errorText?: string | string[] | React.ReactNode | React.ReactNodeArray
  helperText?: string | string[] | React.ReactNode | React.ReactNodeArray
  id?: string
  label?: string
  isLabelHidden?: boolean
  placeholder?: string
  placemat?: string
  type?: 'email' | 'number' | 'password' | 'tel' | 'text' | 'url'
  multiline?: boolean
  value?: string
  onChange?: React.ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement>
  leftIcon?: React.ReactElement<any>
  rightIcon?: React.ReactElement<any>
  removeBorderRadiusLeft?: boolean
  removeBorderRadiusRight?: boolean
  removeBorderRadiusBoth?: boolean
  autoComplete?: string | undefined
  htmlFor?: string
  required?: boolean
  placeHolder?: string | undefined
  onFocus?: React.FocusEventHandler<HTMLInputElement> | undefined
  onClick?: React.MouseEventHandler<HTMLInputElement> | undefined
  onBlur?: React.FocusEventHandler<HTMLInputElement> | undefined
  onKeyDown?: React.KeyboardEventHandler<HTMLInputElement> | undefined
  onKeyUp?: React.KeyboardEventHandler<HTMLInputElement> | undefined
  onPaste?: React.ClipboardEventHandler<HTMLInputElement> | undefined
  defaultValue?: string | number | readonly string[] | undefined
  pattern?: string | undefined
  min?: string | number | undefined
  max?: string | number | undefined
  minLength?: number | undefined
  maxLength?: number | undefined
  inputRef?: React.Ref<any>
  hidePasswordLabel?: string,
  showPasswordLabel?: string,
  onPasswordShown?: (ev: any) => any
  isReadOnly?: boolean | undefined
  labelStyle?: React.CSSProperties
  style?: React.CSSProperties
} & React.InputHTMLAttributes<any> &
  React.TextareaHTMLAttributes<any> &
  PrefixSuffixProps

export type withClassName = {
  className?: string
}

export type FormMessageProps = {
  messageId: string
  helperText?: string | string[] | React.ReactNode | React.ReactNodeArray
  errorText?: string | string[] | React.ReactNode | React.ReactNodeArray
  successText?: string | string[] | React.ReactNode | React.ReactNodeArray
}

export type RenderContentArgs = {
  inputClassName: string
  name: string
  id: string
  setFocus: boolean
  isValid: boolean
  placeholder?: string
  placemat?: string
  label?: string
  labelClassName?: string
  inputTag?: string
  [propName: string]: any
}

export type TextInputWrapperProps = ITextInputProps & {
  renderContent: (object: any) => React.ReactNode
}
