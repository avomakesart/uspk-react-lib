import * as React from 'react'
import { IColumnProps } from '../types'
import './column.css'

export const Column: React.FC<IColumnProps> = ({ children }) => {
  return <div className="column-wrapper">{children}</div>
}
