import * as React from 'react'

export const useRepositionOnResize = (handler: () => void, active = true) => {
  React.useEffect(() => {
    if (!active) return
    const listener = () => {
      handler()
    }

    window.addEventListener('resize', listener)

    return () => {
      if (!active) return
      window.removeEventListener('resize', listener)
    }
  }, [handler, active])
}
