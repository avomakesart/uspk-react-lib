/* eslint-disable @typescript-eslint/no-explicit-any */
import * as React from 'react'

/**
 * similar to `useEffect` but gets triggered only when value changes
 * @param fn executable function on dependency updates
 * @param inputs dependency array
 */
export function useDidUpdateEffect(fn: any, inputs: any) {
  const didMountRef = React.useRef(false)

  React.useEffect(() => {
    if (didMountRef.current) fn()
    else didMountRef.current = true
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, inputs)
}
