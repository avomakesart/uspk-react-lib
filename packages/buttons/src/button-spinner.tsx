import cls from 'classnames'
import * as React from 'react'
import { Spinner } from '../../spinner/src'
import './button.css'

interface ButtonSpinnerProps {
  label?: string
  /**
   * @type SystemProps["margin"]
   */
  //   spacing?: any
  className?: string
  placement?: 'start' | 'end'
}

export const ButtonSpinner: React.FC<ButtonSpinnerProps> = props => {
  const {
    label,
    placement,
    // spacing,
    children = <Spinner color="currentColor" width="1em" height="1em" />,
    className,
    ...rest
  } = props

  const _className = cls('', className)
  const marginProp = placement === 'start' ? 'marginEnd' : 'marginStart'

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const spinnerStyles: any = React.useMemo(
    () => ({
      display: 'flex',
      alignItems: 'center',
      position: label ? 'relative' : 'absolute',
      [marginProp]: label ? '0.5rem' : 0,
      fontSize: '1em',
      lineHeight: 'normal',
    }),
    [label, marginProp],
  )

  return (
    <div className={_className} {...rest} style={spinnerStyles}>
      {children}
    </div>
  )
}
