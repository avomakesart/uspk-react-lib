import cls from 'classnames'
import * as React from 'react'
import './spinner.css'
import { ILoadingSpinnerProps } from './types'

export const Spinner = React.forwardRef<HTMLDivElement, ILoadingSpinnerProps>(
  function Spinner(
    {
      label = 'Loading...',
      thickness = '2px',
      speed = '0.45s',
      color,
      emptyColor = 'transparent',
      width = '1.5rem',
      height = '1.5rem',
      className,
      ...rest
    },
    ref,
  ) {
    const srOnlyeStyles = {
      border: '0px',
      clip: 'rect(0px, 0px, 0px, 0px)',
      height: '1px',
      width: '1px',
      margin: '-1px',
      padding: '0px',
      overflow: 'hidden',
      whiteSpace: 'nowrap',
      position: 'absolute',
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } as any

    const _className = cls('animate-spinner', className)

    const spin = 'spin'

    const spinnerStyles = {
      display: 'inline-block',
      borderColor: 'currentColor',
      borderStyle: 'solid',
      borderRadius: '99999px',
      borderWidth: thickness,
      width: width,
      height: height,
      borderBottomColor: emptyColor,
      borderLeftColor: emptyColor,
      color,
      animation: `${spin} ${speed} linear infinite`,
    }

    return (
      <div ref={ref} style={spinnerStyles} className={_className} {...rest}>
        {label && <span style={srOnlyeStyles}>{label}</span>}
      </div>
    )
  },
)
