import * as React from 'react'
import cls from 'classnames'
import { ErrorIcon } from '../assets/error-icon'
import './field-group-message.css'

interface Props {
  errorText?: string
  helperText?: string
  msgId: string
}

export const FieldGroupMessage = ({ errorText, helperText, msgId }: Props) => {
  return (
    (errorText && (
      <p
        className={cls(
          'radio-group__error-text',
          'radio-group__error-text--with-svg-icon',
        )}
        id={msgId}
      >
        <ErrorIcon />
        {errorText}
      </p>
    )) ||
    (helperText && (
      <p className="radio-group__helper-text" id={msgId}>
        {helperText}
      </p>
    )) ||
    null
  )
}
