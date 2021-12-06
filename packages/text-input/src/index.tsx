/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react/display-name */
import * as React from 'react'
import { ErrorIcon } from '../../alert/src/assets/icons'
import './input.css'
import { TextInputWrapper } from './text-input-wrapper'
import { FormMessageProps, ITextInputProps, withClassName } from './types'
import cls from 'classnames'
import { SuccessIcon } from './assets/icons/success-icon/index'
import { EyeIcon } from './assets/icons/eye-icon'
import { EyeIconOff } from './assets/icons/eye-icon-off'
import { useHover } from '../../custom-hooks/src'

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
      type,
      value,
      onChange,
      onClick,
      leftIcon,
      rightIcon,
      onBlur,
      onFocus,
      onKeyDown,
      onKeyUp,
      onPaste,
      defaultValue,
      className,
      min,
      max,
      minLength,
      maxLength,
      pattern,
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
    const internalRef = React.useRef<HTMLInputElement>()
    const textInputRef = ref || internalRef
    const [inputType, setInputType] = React.useState(type)
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
          <p className="input-text-error">{successText}</p>
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

    const inputClassName = [
      'input',
      className && className,
      error ? 'input-error' : '',
      disabled ? 'input-disabled' : '',
    ]
      .join(' ')
      .trim()

    const inputStyle = (() => {
      if (leftIcon) return { paddingLeft: '2.4375rem' }
      else if (prefix) return { paddingLeft: '1.5rem' }
      return { paddingLeft: '1rem' }
    })()

    const msgId = `message_${id}`

    // const renderIcon = (
    //   icon: React.ReactElement<any> & withClassName,
    //   side: 'left' | 'right',
    // ) =>
    //   icon
    //     ? React.cloneElement(icon, {
    //         className: cls(icon.props.className, `text-input__icon--${side}`),
    //       })
    //     : null
    const passwordVisibilityToggleClasses = cls(
      `text-input--password__visibility__toggle`,
      // `btn-pass`,
      // `btn--icon-only`,
      // `tooltip__trigger`,
      // `tooltip--a11y`,
      {
        // [`btn--disabled`]: disabled,
        // [`tooltip--${tooltipPosition}`]: tooltipPosition,
        // [`tooltip--align-${tooltipAlignment}`]: tooltipAlignment,
      },
    )

    const passwordIsVisible = inputType === 'text'
    const passwordVisibilityIcon = passwordIsVisible ? (
      <EyeIconOff />
    ) : (
      <EyeIcon />
    )

    const handleShowPassword = (event: any) => {
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
          {prefix && <span className="text-input__icon--prefix">{prefix}</span>}
          <input
            autoComplete={autoComplete}
            type={inputType}
            className={inputClassName}
            required={required}
            id={id}
            placeholder={placeHolder}
            onClick={onClick}
            onChange={onChange}
            onFocus={onFocus}
            onKeyDown={onKeyDown}
            onKeyUp={onKeyUp}
            onBlur={onBlur}
            onPaste={onPaste}
            defaultValue={defaultValue}
            min={min}
            max={max}
            disabled={disabled}
            minLength={minLength}
            maxLength={maxLength}
            pattern={pattern}
            style={inputStyle}
            readOnly={isReadOnly}
            value={value}
            aria-label={label ? label : 'textField'}
            {...rest}
          />
          {/* {inputType === 'password' && ( */}
            <button
              type="button"
              className={passwordVisibilityToggleClasses}
              disabled={disabled}
              onClick={handleShowPassword}
              ref={passLavelhoverRef}
            >
              {!disabled && isPassLabelHover && (
                <span className={`assistive-text`}>
                  {passwordIsVisible ? hidePasswordLabel : showPasswordLabel}
                </span>
              )}
              {passwordVisibilityIcon}
            </button>
          {/* )} */}
          {rightIcon && (
            <span className="text-input__icon--right">{rightIcon}</span>
          )}
          {suffix && <span className="text-input__icon--suffix">{suffix}</span>}
        </div>
        {/* {renderIcon(rightIcon as any, 'right')} */}

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
