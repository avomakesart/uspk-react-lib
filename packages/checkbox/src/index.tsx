import * as React from 'react'
import './checkbox.css'

interface CheckboxProps {
  onCheck: React.ChangeEventHandler<HTMLInputElement>
  checked: boolean | undefined
  name: string | undefined
  id?: string | undefined
  className?: string | undefined
  label?: string | undefined
  htmlLabelFor?: string | undefined
}

export const Checkbox: React.FC<CheckboxProps> = ({
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
