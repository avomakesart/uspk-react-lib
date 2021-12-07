/* eslint-disable @typescript-eslint/no-explicit-any */
import * as React from 'react'
import cls from 'classnames'
import './field-group-label.css'

interface Props {
  className?: string
  icon?: React.ReactElement<any>
  as?: keyof JSX.IntrinsicElements | React.JSXElementConstructor<any>
}

export const FieldGroupLabel: React.FunctionComponent<Props> = ({
  as = 'legend',
  children,
  className,
  icon,
  ...rest
}) => {
  return React.createElement(
    as,
    {
      className: cls(
        className,
        'radio-group__label',
        'radio-group__label--with-svg-icon',
      ),
      ...rest,
    },
    children,
    icon,
  )
}
