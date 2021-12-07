import * as React from 'react'

import { MultiSelectProvider } from '../hooks/use-multi-select'
import { ISelectProps } from '../utils/interfaces'
import Dropdown from './dropdown'

export const MultiSelect = (props: ISelectProps) => (
  <MultiSelectProvider props={props}>
    <div className={`uspk ${props.className || 'multi-select'}`}>
      <label htmlFor={props.label} className="multi-select-label">
        {props.label}
      </label>
      <Dropdown />
    </div>
  </MultiSelectProvider>
)
