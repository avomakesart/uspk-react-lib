/* eslint-disable @typescript-eslint/no-explicit-any */
import * as React from 'react'
import cls from 'classnames'
import {
  withClassName,
  FormMessageProps,
  TextInputWrapperProps,
} from '../types'
import { ErrorIcon } from '../assets/icons/error-icon'
import { SuccessIcon } from '../assets/icons/success-icon'

const FormMessage = ({
  messageId,
  helperText,
  errorText,
  successText,
}: FormMessageProps) => {
  if (errorText || successText) {
    const text = errorText ? errorText : successText
    const isSuccessText = !errorText
    const processText = Array.isArray(text) ? (
      <ul
        style={{ display: 'flex', flexDirection: 'column', listStyle: 'none' }}
      >
        {text.map((msg, index) => (
          <li key={`msg${messageId}-${index}`}>{msg}</li>
        ))}
      </ul>
    ) : (
      text
    )

    let errorIcon, successIcon

    if (errorText) {
      errorIcon = <ErrorIcon />
    }

    if (isSuccessText) {
      successIcon = <SuccessIcon />
    }

    return (
      <div>
        {errorIcon ?? successIcon}
        {processText}
      </div>
    )
  }

  if (helperText) {
    const processText = Array.isArray(helperText) ? (
      <ul className="ppvx_text-input__helper-text" id={messageId}>
        {(helperText as any[]).map((msg, index) => (
          <li key={`msg${messageId}-${index}`}>{msg}</li>
        ))}
      </ul>
    ) : (
      <div className="ppvx_text-input__helper-text" id={messageId}>
        {helperText}
      </div>
    )
    return processText
  }
  return null
}

const renderIcon = (
  icon: React.ReactElement<any> & withClassName,
  side: 'left' | 'right',
) =>
  icon
    ? React.cloneElement(icon, {
        className: cls(icon.props.className, `text-input__icon--${side}`),
      })
    : null

export const TextInputWrapper = ({
  setFocus,
  className,
  inputClassName,
  labelClassName,
  successText,
  errorText,
  error = !!errorText,
  helperText,
  value,
  name,
  id = `text-input-${name}`,
  label,
  isLabelHidden,
  multiline = false,
  placeholder = ' ',
  placemat,
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  //@ts-ignore
  leftIcon = null,
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  //@ts-ignore
  rightIcon = null,
  onChange,
  children,
  renderContent,
  removeBorderRadiusLeft,
  removeBorderRadiusRight,
  removeBorderRadiusBoth,
  dir,
  ...rest
}: TextInputWrapperProps) => {
  const InputTag: any = multiline ? 'textarea' : 'input'
  const globalClassName = cls(
    'text-input',
    {
      ['field--error']: error,
      ['text-input--nolabel']: !label || label === '' || isLabelHidden,
      ['text-input--textarea']: multiline,
      ['text-input--combine-left']: removeBorderRadiusLeft,
      ['text-input--combine-right']: removeBorderRadiusRight,
      ['text-input--combine-both']: removeBorderRadiusBoth,
    },
    className,
  )

  const inputTagClasses = cls(
    'text-input__control',
    {
      ['ppvx_text-input__control--icon-right']: rightIcon,
    },
    inputClassName,
  )

  const labelClasses = cls('text-input__label', labelClassName)

  const msgId = `message_${id}`

  const valueProps = onChange
    ? {
        onChange,
        value,
      }
    : {
        defaultValue: value,
      }
  const ariaDescribedByProp =
    helperText || errorText
      ? {
          'aria-describedby': msgId,
        }
      : {}

  const otherProps = {
    ...ariaDescribedByProp,
    ...valueProps,
    ...rest,
  }

  return (
    <div className={globalClassName} dir={dir}>
      {renderIcon(leftIcon, 'left')}
      {renderContent({
        inputClassName: inputTagClasses,
        name,
        id,
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        //@ts-ignore
        setFocus,
        isValid: error,
        placeholder,
        placemat,
        label,
        labelClassName: labelClasses,
        isLabelHidden,
        inputTag: InputTag,
        ...otherProps,
      })}
      <FormMessage
        errorText={errorText}
        successText={successText}
        helperText={helperText}
        messageId={msgId}
      />
      {renderIcon(rightIcon, 'right')}
    </div>
  )
}
