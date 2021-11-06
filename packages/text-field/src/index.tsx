import * as React from 'react'
import './input.css'
import { ITextFieldProps } from './types'

export const TextField: React.FC<ITextFieldProps> = ({
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
