/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/ban-ts-comment */
import * as React from 'react'
import clsx from 'classnames'
import './checkbox-group.css'
import { ErrorIcon } from '../assets/icons/error-icon'
import { ICheckboxProps } from '../types'
import { Checkbox } from '..'

type CheckboxGroupProps = {
  className?: string
  checkboxLabelClassName?: string
  name: string
  id?: string
  value?: any
  label?: React.ReactNode
  labelIcon?: React.ReactNode
  helperText?: React.ReactNode
  errorText?: React.ReactNode
  error?: boolean
  options: any[]
  children: (Checkbox: React.FC<ICheckboxProps>) => JSX.Element
  onChange: (newValue: any[]) => any
} & React.HTMLAttributes<HTMLFieldSetElement>

const CheckboxGroup: React.FunctionComponent<CheckboxGroupProps> = ({
  checkboxLabelClassName,
  label,
  labelIcon,
  helperText,
  errorText,
  error,
  id,
  options: checkedValues,
  className,
  onChange,
  name,
  children,
  ...rest
}) => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const checkboxErrorIcon: React.ReactElement<any> = <ErrorIcon />

  const message = (errorText || helperText) && (
    <p
      className={clsx({
        ['checkbox-group__helper-text']: !error,
        ['checkbox-group__error-text']: error,
        ['checkbox-group__error-text--with-svg-icon']: error,
      })}
    >
      {error && checkboxErrorIcon}
      {error ? errorText : helperText}
    </p>
  )

  const labelIconElm = labelIcon && (
    <span className="checkbox__label-icon">{labelIcon}</span>
  )

  const checkboxGroupClass = clsx({ ['field--error']: !!errorText })

  const onCheckboxChange = (
    checkboxValue: any,
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    if (event.target.checked) {
      onChange(checkedValues.concat(checkboxValue))
    } else {
      onChange(checkedValues.filter(v => v !== checkboxValue))
    }
  }

  const CheckboxTwo: React.FC<ICheckboxProps> = checkboxProps => {
    const { label, value: cbValue, disabled, ...rest } = checkboxProps

    const checked = checkedValues ? checkedValues.indexOf(cbValue) >= 0 : false

    console.log(checked)

    const checkProps = {
      ...checkboxProps,
      labelClassName: checkboxLabelClassName,
    }

    return (
      <Checkbox
        {...rest}
        {...checkProps}
        id={id}
        key={`cb-key-${cbValue}`}
        type="checkbox"
        name={name}
        disabled={disabled}
        checked={checked}
        className={clsx('checkbox-group-child', className)}
        checkClassName={checkboxGroupClass}
        onChange={onCheckboxChange.bind(null, cbValue)}
        value={cbValue}
        label={label}
      />
    )
  }

  return (
    <fieldset className={clsx('checkbox-group', className)} {...rest}>
      <legend className="checkbox-group__label">
        {label}
        {labelIconElm}
      </legend>
      {children(CheckboxTwo)}
      {message}
    </fieldset>
  )
}

export { CheckboxGroup }
