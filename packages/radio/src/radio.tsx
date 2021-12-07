import * as React from 'react'
import cls from 'classnames'
import './radio.css'

export type IRadioProps = {
  name?: string
  value?: string
  id?: string
  checked?: boolean | string
  disabled?: boolean
  label?: React.ReactNode | string
  centeredLabel?: boolean
  labelIcon?: React.ReactNode
  helperText?: React.ReactNode
  className?: string
  labelClassName?: string
  checkClassName?: string
  error?: boolean
} & React.InputHTMLAttributes<HTMLInputElement>

type ValueProps = {
  onChange?: React.ReactEventHandler
  checked?: boolean
  defaultChecked?: boolean
}

const renderHelperText = (text: React.ReactNode) =>
  text && <p className="radio__helper-text">{text}</p>

const inferValue = (label: React.ReactNode | string) => {
  if (typeof label === 'string') {
    return label
  }
  return 'value_not_set'
}

const RadioCheckIcon = () => {
  return (
    <span className="radio__check-icon">
      <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
        <circle
          r="18"
          id="svg_1"
          cy="50"
          cx="50"
          strokeWidth="0"
          fill="currentColor"
        />
      </svg>
    </span>
  )
}

const generatedName = () =>
  `${Math.random().toFixed(8).toString().replace('0.', '')}`

const Radio = React.forwardRef<HTMLInputElement, IRadioProps>(
  (
    {
      label,
      labelIcon,
      name = generatedName(),
      value = inferValue(label),
      id = `radio_${name}_${value}`,
      centeredLabel = false,
      helperText,
      className,
      labelClassName,
      checkClassName,
      onChange,
      disabled,
      checked = false,
      ...rest
    },
    ref,
  ) => {
    const checkedPropName = onChange ? 'checked' : 'defaultChecked'
    const valueProps: ValueProps = { onChange }
    valueProps[checkedPropName] = checked

    const labelIconElm = labelIcon && (
      <span className="radio__label-icon">{labelIcon}</span>
    )

    const labelClasses = cls(
      'radio__label',
      {
        ['radio__label--centered']: centeredLabel,
      },
      labelClassName,
    )

    const radioCheckClasses = cls(
      'radio__check-icon-container',
      {
        ['radio__label--with-svg-icon']: checked,
        ['radio__shadow']: checked,
      },
      checkClassName,
    )

    return (
      <div className={cls('radio', className)}>
        <input
          className="radio__input"
          type="radio"
          name={name}
          value={value}
          id={id}
          ref={ref}
          checked={checked}
          disabled={disabled}
          onChange={onChange}
          aria-label={id}
          title={id}
          {...valueProps}
          {...rest}
        />

        <label
          className={labelClasses}
          htmlFor={id}
          aria-label={id}
          aria-labelledby={id}
          title={id}
        >
          <span className={radioCheckClasses}>
            {checked && <RadioCheckIcon />}
          </span>
          {label}
          {labelIconElm}
          {renderHelperText(helperText)}
        </label>
      </div>
    )
  },
)

export { Radio }
