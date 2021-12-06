/* eslint-disable @typescript-eslint/ban-ts-comment */
import React, { useState, FocusEvent } from 'react'
import cls from 'classnames'
import { ITextInputProps } from '../types'
//@ts-ignore
// import styles from './text-input.less'
// import TextInputContent, {TextInputContentProps} from './textInputContent'

export type PrefixSuffixProps = {
  prefix?: string
  suffix?: string
  prefixClassName?: string
  suffixClassName?: string
}

type TextInputContentWithPrefixSuffixProps = {
  children?: any
} & ITextInputProps &
  PrefixSuffixProps

export const TextInputContentWithPrefixSuffix = ({
  label,
  id,
  prefix,
  children,
  suffix,
  prefixClassName,
  suffixClassName,
  inputClassName,
  inputRef,
  onBlur = null,
  onFocus = null,
  ...rest
}: TextInputContentWithPrefixSuffixProps) => {
  const textInputRef: any = inputRef
  const [textInputHasFocus, setTextInputFocus] = useState(false)
  const inputClass = cls(
    inputClassName,
    { ['text-input__control--prefix']: prefix },
    { ['text-input__control--suffix']: suffix },
  )

  const PrefixClass = cls('text-input__prefix', prefixClassName)
  const SuffixClass = cls('text-input__suffix', suffixClassName)

  const prefixWrapperClass = cls('text-input__prefix-wrapper', {
    ['text-input__prefix-wrapper--focus']: textInputHasFocus,
  })

  const labelId = label ? `${id}-label ` : ''
  const prefixEleId = prefix ? `${id}-prefix ` : ''
  const suffixEleId = suffix ? `${id}-suffix` : ''

  const ariaLabelledByIds = `${labelId}${prefixEleId}${suffixEleId}`

  const handlePrefixWrapperClick = () => {
    /* istanbul ignore else */
    if (textInputRef.current) {
      const textInputElm: HTMLTextAreaElement = textInputRef.current
      textInputElm.focus()
    }
  }

  const handleFocus = (event: FocusEvent<any>): void => {
    setTextInputFocus(true)
    /* istanbul ignore else */
    if (onFocus) {
      onFocus(event)
    }
  }

  const handleBlur = (event: FocusEvent<any>): void => {
    setTextInputFocus(false)
    /* istanbul ignore else */
    if (onBlur) {
      onBlur(event)
    }
  }

  return (
    <div className={prefixWrapperClass} onClick={handlePrefixWrapperClick}>
      {children}
      {prefix && (
        <div id={prefixEleId.trim()} className={PrefixClass}>
          {prefix}
        </div>
      )}
      {suffix && (
        <div id={suffixEleId.trim()} className={SuffixClass}>
          {suffix}
        </div>
      )}
    </div>
  )
}
