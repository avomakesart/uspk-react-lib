/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import * as React from 'react'
import { isEqual } from 'lodash'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const useDeepCompareMemoize = (value: any) => {
  const valueRef = React.useRef()

  if (!isEqual(value, valueRef.current)) {
    valueRef.current = value
  }
  return valueRef.current
}
