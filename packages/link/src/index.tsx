import * as React from 'react'
import { LinkProps } from './types'
import cls from 'classnames'
import './link.css'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const Link = React.forwardRef<LinkProps, any>((props, ref) => {
  const {
    inverse,
    secondary,
    className,
    leftIcon,
    children,
    onClick,
    buttonType,
    upperCase,
    lowerCase,
    as = 'a',
    ...rest
  } = props

  if (as === 'a' && rest.target === '_blank') {
    if (!rest.rel) {
      rest.rel = 'noreferrer noopener'
    } else {
      if (!/noreferrer/i.test(rest.rel)) {
        rest.rel = `${rest.rel} noreferrer`
      }
      if (!/noopener/i.test(rest.rel)) {
        rest.rel = `${rest.rel} noopener`
      }
    }
  }

  const leftIconElm = leftIcon && (
    <span className="link-left-icon">{leftIcon}</span>
  )

  const _className = cls(
    ['link-primary'],
    {
      ['link-secondary']: secondary,
      ['link-inverse']: inverse,
      ['button-link-primary']: as === 'button',
    },
    className,
  )

  const fontTransform = upperCase
    ? 'uppercase'
    : lowerCase
    ? 'lowercase'
    : 'none'

    console.log(fontTransform);
    

  const linkStyle = {
    textTransform: fontTransform,
  }

  const Component = as

  return (
    <>
      {as === 'button' ? (
        <Component
          className={_className}
          ref={ref}
          onClick={onClick}
          style={linkStyle}
          type={buttonType}
          {...rest}
        >
          {leftIconElm}
          {children}
        </Component>
      ) : (
        <Component className={_className} style={linkStyle} ref={ref} {...rest}>
          {leftIconElm}
          {children}
        </Component>
      )}
    </>
  )
})
