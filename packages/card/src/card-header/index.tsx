import * as React from 'react'
import { Typography } from '../../../typography/src'
import './card-header.css'

export interface ICardHeaderProps {
  title?: string
  children?: React.ReactNode | React.ReactNode[]
}

export const CardHeader: React.FC<ICardHeaderProps> = ({ children, title }) => {
  return (
    <div className="card-header-container">
      {title && (
        <Typography variant="h5" color="primary">
          {title}
        </Typography>
      )}
      {children}
    </div>
  )
}
