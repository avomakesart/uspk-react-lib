import React from 'react'
import { IconSpinProps } from '../types'

export const IconSpin: React.FC<IconSpinProps> = ({
  className,
  fill = 'gray',
  stroke = 'gray',
  style,
  width = '1.5rem',
  height = '1.5rem'
}) => {
  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      style={style}
      width={width}
      height={height}
    >
      <circle
        className="opacity-25"
        cx="12"
        cy="12"
        r="10"
        stroke={stroke}
        strokeWidth="4"
      ></circle>
      <path
        className="opacity-75"
        fill={fill}
        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
      ></path>
    </svg>
  )
}
