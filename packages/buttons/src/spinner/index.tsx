import * as React from 'react'
import './spinner.css'

export const Spinner: React.FC = () => {
  return (
    <div className="spin-ring">
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  )
}
