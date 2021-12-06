/* eslint-disable @typescript-eslint/no-explicit-any */
import cls from 'classnames'
import * as React from 'react'
import { Spinner } from '../../spinner/src'
import { CheckMark } from './assets/icons/checkmark'
import { ButtonIcon } from './button-icon'
import { ButtonSpinner } from './button-spinner'
import './button.css'
import { IButtonProps } from './types'

export const Button = React.forwardRef<
  HTMLButtonElement | HTMLAnchorElement,
  IButtonProps
>(function Button(
  {
    children,
    className,
    type,
    primary,
    secondary,
    disabled,
    backgroundColor,
    textColor,
    isFullWidth,
    btnState = 'initial',
    icon,
    inverse,
    as,
    iconComponent,
    leftIcon,
    rightIcon,
    iconSpace,
    ...rest
  },
  ref,
) {
  const [width, setWidth] = React.useState(0)
  const [height, setHeight] = React.useState(0)
  const btnRef = React.useRef<any>(ref)

  React.useEffect(() => {
    if (btnRef?.current && btnRef?.current?.getBoundingClientRect().width) {
      setWidth(btnRef?.current?.getBoundingClientRect().width)
    }
    if (btnRef?.current && btnRef?.current?.getBoundingClientRect().height) {
      setHeight(btnRef?.current?.getBoundingClientRect().height)
    }
  }, [children])

  const loadingSpinnerProps: any = {}

  if (btnState === 'processing') {
    if (
      (secondary && inverse) ||
      (icon && inverse) ||
      (!secondary && !icon && !inverse)
    ) {
      loadingSpinnerProps.inverse = true
    }
  }

  const renderChildren = () => {
    let overlayClasses
    let srText
    if (btnState !== 'initial') {
      overlayClasses = cls(
        ['button-state__overlay'],
        [`button-state__overlay--${btnState}`],
        btnState === 'success' && [
          'button-state__overlay--success-with-svg-icon',
        ],
      )
    }

    const buttonCheckmarkIcon: React.ReactElement<any> = (
      <span>
        <CheckMark className="button-state__success-icon" />
      </span>
    )

    const iconWrapper = iconComponent

    return (
      <>
        {iconWrapper && { icon }}

        {btnState === 'processing' ? (
          <ButtonSpinner label="loading" placement="end">
            <Spinner color="currentColor" label="hello" />
          </ButtonSpinner>
        ) : (
          <>
            {leftIcon && (
              <ButtonIcon marginEnd={iconSpace}>{leftIcon}</ButtonIcon>
            )}
            {children}
            {rightIcon && (
              <ButtonIcon marginStart={iconSpace}>{rightIcon}</ButtonIcon>
            )}
          </>
        )}
        {btnState !== 'initial' && (
          <span className={overlayClasses}>
            {btnState === 'success' && buttonCheckmarkIcon}
          </span>
        )}
        <span>{srText}</span>
      </>
    )
  }

  const Component = as || 'button'
  const _className = cls(
    ['button'],
    {
      ['button-default']: !primary && !secondary && !inverse && !disabled,
      ['button-primary']: primary,
      ['button-inverse']: inverse,
      ['button-disabled']: disabled,
      ['button-secondary']: secondary,
      ['ppvx_btn--icon']: icon,
    },
    { [`button-state__${btnState}`]: btnState !== 'initial' },
    className,
  )

  const buttonStyle = {
    background: backgroundColor,
    color: textColor,
    width: isFullWidth ? '100%' : btnState === 'processing' && `${width}px`,
    height: btnState === 'processing' && `${height}px`,
  }

  const isDisabled = disabled || (btnState && btnState) !== 'initial'

  return (
    <Component
      className={_className}
      aria-live="assertive"
      style={buttonStyle}
      disabled={isDisabled}
      ref={btnRef}
      type={type}
      {...rest}
    >
      {renderChildren()}
    </Component>
  )
})
