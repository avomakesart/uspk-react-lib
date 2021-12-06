import * as React from 'react'

/**
 * `useKeeper` is a helper around `useRef`.
 *
 * You don't need to access the `.current`property to get the value
 * If refresh is set to true. The ref will be updated every render
 */
export function useKeeper<T>(arg: T, refresh = false) {
  const ref = React.useRef<T>(arg)

  React.useEffect(() => {
    if (refresh) ref.current = arg
  })

  return ref.current
}
