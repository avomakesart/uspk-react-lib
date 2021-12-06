/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react/display-name */
import * as React from 'react'
import { CheckMark } from './assets/icons/checkmark'
import clsx from 'classnames'
import './checkbox.css'
import { ICheckboxProps } from './types'
import { ErrorIcon } from './assets/icons/error-icon'
import { Indeterminate } from './assets/icons/indeterminate'

const uniqueId = (id?: string, prefix = '_') =>
  id === undefined
    ? `${prefix}${Math.random().toFixed(8).toString().replace('0.', '')}`
    : id

type ValueProps = {
  onChange?: React.ReactEventHandler
  checked?: boolean
  defaultChecked?: boolean
}

const renderLabel = (
  text: React.ReactNode,
  id: string,
  labelIcon: React.ReactNode,
  error?: boolean,
  helperText?: React.ReactNode,
  // onChange?: any,
  checked?: boolean,
) => {
  const labelIconElm = labelIcon && (
    <span className="checkbox__label">{labelIcon}</span>
  )

  const helperTextElm = !error && helperText && (
    <p className="checkbox__helper-text">{helperText}</p>
  )

  const cls = clsx(
    'check-icon-container',
    { ['check-icon-container-checked']: checked },
    { ['field--error']: error },
  )
  console.log(checked)

  return (
    <label className="checkbox__label" htmlFor={id}>
      <span className={cls}>
        {checked && <CheckMark className="checkbox__check-icon" />}
      </span>
      {text}
      {labelIconElm}
      {helperTextElm}
    </label>
  )
}

const inferValue = (label: React.ReactNode | string) => {
  if (typeof label === 'string') {
    return label
  }
  return 'value_not_set'
}

const generatedName = () =>
  `${Math.random().toFixed(8).toString().replace('0.', '')}`

const Checkbox = React.forwardRef<HTMLInputElement, ICheckboxProps>(
  (
    {
      name = generatedName(),
      label,
      labelIcon,
      required,
      checkClassName,
      disabled,
      onChange,
      checked = false,
      value = inferValue(label),
      id = `checkbox_${name}_${value}`,
      className,
      helperText,
      errorText,
      error,
      indeterminate,
      dir,
      ...rest
    },
    ref,
  ) => {
    const checkedPropName = onChange ? 'checked' : 'defaultChecked'
    const valueProps: ValueProps = { onChange }
    valueProps[checkedPropName] = checked

    const checkboxErrorIcon: React.ReactElement<any> = <ErrorIcon />

    const checkboxId = `${uniqueId(id, 'checkbox_')}`

    const message = error && errorText && (
      <p className="checkbox__error-container">
        {checkboxErrorIcon}
        {errorText}
      </p>
    )

    const classes = clsx('checkbox', className)

    const labelIconElm = labelIcon && (
      <span className="checkbox__label">{labelIcon}</span>
    )

    const helperTextElm = !error && helperText && (
      <p className="checkbox__helper-text">{helperText}</p>
    )

    const cls = clsx(
      'check-icon-container',
      checkClassName,
      { ['check-icon-container-checked']: checked },
      { ['check-icon-container-indeterminate']: indeterminate },
      { ['field--error']: error },
    )

    return (
      <div className={classes} dir={dir}>
        <input
          className="checkbox__input"
          type="checkbox"
          name={name}
          value={value}
          id={checkboxId}
          ref={ref}
          checked={checked}
          disabled={disabled}
          onChange={onChange}
          aria-label={id}
          title={id}
          {...valueProps}
          {...rest}
        />
        {/* {renderLabel(label, checkboxId, labelIcon, error, helperText, checked)} */}

        <label className="checkbox__label" htmlFor={id}>
          <span className={cls}>
            {checked && <CheckMark className="checkbox__check-icon" />}
            {indeterminate && (
              <Indeterminate className="checkbox__indeterminate-icon " />
            )}
          </span>
          {label}
          {labelIconElm}
          {helperTextElm}
        </label>

        {message}
      </div>
    )
  },
)

export { Checkbox }
