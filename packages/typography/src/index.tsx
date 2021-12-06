import * as React from 'react'
import cn from 'classnames'
import { ITypographyProps, variantsMapping } from './types'
import './typography.css'

export const Typography: React.FC<ITypographyProps> = ({
  variant,
  color,
  children,
  className,
  ...props
}) => {
  const cls = cn(
    {
      [`typography--variant-${variant}`]: variant,
      [`typography--color-${color}`]: color,
    },
    className,
  )

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const Component: any = variant ? variantsMapping[variant] : 'p'

  return (
    <Component className={cls} {...props}>
      {children}
    </Component>
  )
}
