/* eslint-disable @typescript-eslint/no-explicit-any */
import * as React from 'react'

export const Arrow = ({ expanded }: any) => (
  <svg
    width="24"
    height="24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    className="dropdown-heading-dropdown-arrow"
  >
    <path d={expanded ? 'M18 15 12 9 6 15' : 'M6 9L12 15 18 9'} />
  </svg>
)
