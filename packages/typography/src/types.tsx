import * as React from 'react'

export interface ITypographyProps {
  variant?: string
  color?: string
  children: React.ReactNode | React.ReactNode[]
  className?: string
}

export const variantsMapping: { [variant: string]: string } = {
  h1: 'h1',
  h2: 'h2',
  h3: 'h3',
  h4: 'h4',
  h5: 'h5',
  h6: 'h6',
  subheading1: 'h6',
  subheading2: 'h6',
  body1: 'p',
  body2: 'p',
}
