import * as React from 'react'
import './checkbox.css'
import { ICheckboxProps } from './types'

export const Checkbox: React.FC<ICheckboxProps> = ({
  onCheck,
  checked,
  name,
  id,
  className,
  label,
  htmlLabelFor,
}) => {
  const checkboxClassname = ['checkbox-input', className].join(' ').trim()

  return (
    <div className="checkbox-container">
      <div className="checkbox-wrapper">
        <input
          id={id}
          name={name}
          type="checkbox"
          checked={checked}
          onChange={onCheck}
          className={checkboxClassname}
        />
      </div>
      <div className="checkbox-label-container">
        <label htmlFor={htmlLabelFor} className="checkbox-label">
          {label}
        </label>
      </div>
    </div>
  )
}
