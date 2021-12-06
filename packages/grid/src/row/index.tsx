import * as React from 'react'
import './row.css'
import { IRowProps } from '../types'

export const Row: React.FC<IRowProps> = ({ children }) => {
  return (
    <div className="row-wrapper">
      {React.Children.toArray(children).map(item => {
        return item && <div />
      })}
    </div>
  )
}
