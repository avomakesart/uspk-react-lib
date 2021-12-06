/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable @typescript-eslint/no-explicit-any */
import * as React from 'react'
// import {useTheme} from '@paypalcorp/pp-react-theme'
import cls from 'classnames'
import { FieldGroupLabel } from './field-group-label'
import { FieldGroupMessage } from './field-group-message'
// @ts-ignore
import { Radio, IRadioProps } from './radio'
import './radio.css'

export type RadioButtonProps = {
  options: IRadioProps[]
  className?: string
  radioLabelClassName?: string
  errorText?: string
  helperText?: string
  name: string
  id?: string
  label?: string
  value?: string
  onChange?: React.ChangeEventHandler<HTMLInputElement>
  icon?: React.ReactElement<any>
  theme?: string
} & React.HTMLAttributes<HTMLInputElement>

/* istanbul ignore next */
const uniqueId = (id?: string, prefix = '_') =>
  id === undefined
    ? `${prefix}${Math.random().toFixed(8).toString().replace('0.', '')}`
    : id

const RadioButton = ({
  className,
  radioLabelClassName,
  errorText,
  helperText,
  id,
  label,
  name,
  value = '',
  icon,
  options,
  onChange,
  ...rest
}: RadioButtonProps) => {
  const radioId = `${uniqueId(id, 'RadioButtton')}`
  const msgId = `message_${radioId}`
  const containerClass = cls('radio-group', className)
  const radioGroupClass = cls({ ['field--error']: !!errorText })

  const renderRadios = (
    optionsList: IRadioProps[],
    componentName: string,
    currentValue: string,
    changeHandler: React.ChangeEventHandler<HTMLInputElement> | undefined,
  ) => {
    if (optionsList.length === 0) {
      return <i>No Options!</i>
    }
    return optionsList.map((listProps: IRadioProps, index: number) => {
      const checkedPropName = changeHandler ? 'checked' : 'defaultChecked'
      const radioProps = {
        ...listProps,
        labelClassName: radioLabelClassName,
      }
      if (currentValue === listProps.value) {
        radioProps[checkedPropName] = true
      }
      return (
        <Radio
          key={`rbtn-item${index}`}
          name={componentName}
          checkClassName={radioGroupClass}
          onChange={changeHandler}
          {...radioProps}
          {...rest}
        />
      )
    })
  }

  return (
    //@ts-ignore
    <fieldset className={containerClass} {...rest}>
      <FieldGroupLabel icon={icon}>{label}</FieldGroupLabel>
      {renderRadios(options, name, value, onChange)}
      <FieldGroupMessage
        errorText={errorText}
        helperText={helperText}
        msgId={msgId}
      />
    </fieldset>
  )
}

export { RadioButton }
