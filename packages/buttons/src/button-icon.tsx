import * as React from 'react'
import cls from 'classnames'
import './button.css'

interface IButtonIconProps {
  children: React.ReactNode | React.ReactNode[]
  className?: string
  marginEnd?: string
  marginStart?: string
}

export const ButtonIcon: React.FC<IButtonIconProps> = ({
  children,
  className,
  marginEnd,
  marginStart,
  ...rest
}) => {
  const _children = React.isValidElement(children)
    ? React.cloneElement(children, {
        'aria-hidden': true,
        focusable: false,
      })
    : children

  const _className = cls('', className)

  const btnIconStyle = {
    display: 'inline-flex',
    alignSelf: 'center',
    flexShrink: 0,
    marginLeft:  marginStart,
    marginRight: marginEnd
  }

  return (
    <span style={btnIconStyle} {...rest} className={_className}>
      {_children}
    </span>
  )
}
