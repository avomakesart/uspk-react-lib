import * as React from 'react'
import './card-footer.css'

export interface ICardFooterProps {
  children?: React.ReactNode | React.ReactNode[]
}

export const CardFooter: React.FC<ICardFooterProps> = ({ children }) => {
  return <div className="card-footer-container">{children}</div>
}
