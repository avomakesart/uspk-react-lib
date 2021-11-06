import * as React from 'react'
import './input.css'

interface TextFieldProps {
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

export const TextField: React.FC<TextFieldProps> = ({
  autoComplete,
  label,
  htmlFor,
  required,
  id,
  placeHolder,
  error,
  errorMessage,
  type,
  value,
  onChange,
  onClick,
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
  disabled,
  style,
}) => {
  const inputClassName = [
    'input',
    className && className,
    error ? 'input-error' : '',
    disabled ? 'input-disabled' : '',
  ]
    .join(' ')
    .trim()

  return (
    <div>
      <label className="input-label" htmlFor={htmlFor} style={labelStyle}>
        {label} {required && <span className="input-required">*</span>}
      </label>
      <div className="input-wrapper">
        <input
          autoComplete={autoComplete}
          type={type}
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
          style={style}
          readOnly={isReadOnly}
          value={value}
        />
      </div>
      <p className="input-text-error">{error ? errorMessage : null}</p>
    </div>
  )
}
