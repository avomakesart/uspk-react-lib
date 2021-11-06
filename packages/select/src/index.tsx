import React, {ChangeEventHandler} from 'react'
import {nanoid} from 'nanoid'
import './select.css'

interface SelectInputProps {
  label?: string
  handleChange: ChangeEventHandler<HTMLSelectElement>
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

export const SelectInput: React.FC<SelectInputProps> = ({
  defaultValue,
  label,
  handleChange,
  data,
  selectedValue,
  name,
  required,
  error,
  errorMessage,
  className,
  disabled,
  multiple
}) => {
  const selectClassName = [
    'select-input',
    className && className,
    error ? 'select-input-error' : '',
    disabled ? 'select-input-disabled' : '',
  ]
    .join(' ')
    .trim()

  return (
    <div>
      <label id="listbox-label" className="select-input-label">
        {label}{' '}
        {required && <span className="select-input-required-mark">*</span>}
      </label>
      <div className="select-input-container">
        <select
          name={name}
          value={selectedValue}
          onChange={handleChange}
          className={selectClassName}
          disabled={disabled}
          multiple={multiple}
        >
          <option value={defaultValue}>{defaultValue}</option>
          {data?.map((value: string) => (
            <option
              className="select-input-option"
              key={nanoid()}
              value={value}
            >
              {value}
            </option>
          ))}
        </select>
        <p className="select-input-error-text">{error ? errorMessage : null}</p>
      </div>
    </div>
  )
}
