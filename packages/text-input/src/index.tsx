/* eslint-disable @typescript-eslint/no-explicit-any */
import cls from 'classnames'
import * as React from 'react'
import { ErrorIcon } from '../../alert/src/assets/icons'
import { useHover } from '../../custom-hooks/src'
import { EyeIcon } from './assets/icons/eye-icon'
import { EyeIconOff } from './assets/icons/eye-icon-off'
import { SuccessIcon } from './assets/icons/success-icon/index'
import './input.css'
import { FormMessageProps, ITextInputProps } from './types'

const TextInput = React.forwardRef<HTMLInputElement, ITextInputProps>(
  (
    {
      autoComplete,
      label,
      htmlFor,
      required,
      id,
      placeHolder,
      error,
      errorText,
      helperText,
      value,
      leftIcon,
      rightIcon,
      defaultValue,
      className,
      min,
      max,
      minLength,
      maxLength,
      pattern,
      type,
      isReadOnly,
      labelStyle,
      hidePasswordLabel = 'Hide password',
      showPasswordLabel = 'Show password',
      onPasswordShown,
      successText,
      disabled,
      style,
      prefix,
      suffix,
      prefixClassName,
      suffixClassName,
      ...rest
    },
    ref,
  ) => {
    const internalRef = React.useRef<HTMLInputElement | any>()
    const textInputRef = ref || internalRef
    const [inputType, setInputType] = React.useState(type)
    const [isPasswordShown, setIsPasswordShown] = React.useState(false)
    const passLavelhoverRef = React.useRef(null)
    const isPassLabelHover = useHover(passLavelhoverRef)

    const FormMessage = ({
      messageId,
      helperText,
      errorText,
      successText,
    }: FormMessageProps) => {
      if (errorText || successText) {
        const text = errorText ? (
          <p className="input-text-error">{errorText}</p>
        ) : (
          successText
        )

        const isSuccessText = !errorText
        const processText = Array.isArray(text) ? (
          <ul
            style={{
              display: 'flex',
              flexDirection: 'column',
              listStyle: 'none',
            }}
          >
            {(text as any[]).map((msg, index) => (
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
          <div className="input-text-error-container">
            {errorIcon ?? successIcon}
            {processText}
          </div>
        )
      }

      if (helperText) {
        const processText = Array.isArray(helperText) ? (
          <ul className="text-input__helper-text" id={messageId}>
            {(helperText as any[]).map((msg, index) => (
              <li key={`msg${messageId}-${index}`}>{msg}</li>
            ))}
          </ul>
        ) : (
          <div className="text-input__helper-text" id={messageId}>
            {helperText}
          </div>
        )
        return processText
      }
      return null
    }

    const inputClassName = cls(
      'input',
      { ['input-error']: error, ['input-disabled']: disabled },
      className,
    )

    const inputStyle = (() => {
      if (leftIcon) return { paddingLeft: '2.4375rem' }
      else if (prefix) return { paddingLeft: '1.5rem' }
      return { paddingLeft: '1rem', style }
    })()

    const msgId = `message_${id}`

    const passwordVisibilityIcon = isPasswordShown ? (
      <EyeIconOff />
    ) : (
      <EyeIcon />
    )

    const handleShowPassword = (event: any) => {
      setIsPasswordShown(!isPasswordShown)
      setInputType(inputType === 'password' ? 'text' : 'password')
      onPasswordShown && onPasswordShown(event)
    }

    return (
      <div>
        <label className="input-label" htmlFor={htmlFor} style={labelStyle}>
          {label} {required && <span className="input-required">*</span>}
        </label>
        {/* {renderIcon(leftIcon, 'left')} */}
        <div className="input-wrapper">
          {leftIcon && (
            <span className="text-input__icon--left">{leftIcon}</span>
          )}
          {prefix && (
            <span className={cls('text-input__icon--prefix', prefixClassName)}>
              {prefix}
            </span>
          )}
          <input
            autoComplete={autoComplete}
            className={inputClassName}
            required={required}
            id={id}
            placeholder={placeHolder}
            defaultValue={defaultValue}
            type={inputType}
            min={min}
            max={max}
            disabled={disabled}
            minLength={minLength}
            maxLength={maxLength}
            pattern={pattern}
            style={inputStyle}
            ref={textInputRef}
            readOnly={isReadOnly}
            value={value}
            aria-label={label ? label : 'textField'}
            {...rest}
          />

          {type === 'password' && (
            <button
              type="button"
              className="text-input--password__visibility__toggle"
              disabled={disabled}
              onClick={handleShowPassword}
              ref={passLavelhoverRef}
            >
              {!disabled && isPassLabelHover && (
                <>
                  <span className="carret" />
                  <span className="assistive-text">
                    {isPasswordShown ? hidePasswordLabel : showPasswordLabel}
                  </span>
                </>
              )}
              {passwordVisibilityIcon}
            </button>
          )}
          {rightIcon && (
            <span className="text-input__icon--right">{rightIcon}</span>
          )}
          {suffix && (
            <span className={cls('text-input__icon--suffix', suffixClassName)}>
              {suffix}
            </span>
          )}
        </div>
        <FormMessage
          helperText={helperText}
          errorText={errorText}
          successText={successText}
          messageId={msgId}
        />
      </div>
    )
  },
)

export { TextInput }
