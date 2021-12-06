import * as React from 'react'

export const useTabbing = (
  contentRef: React.RefObject<HTMLElement>,
  active = true,
) => {
  React.useEffect(() => {
    if (!active) return
    const listener = (event: KeyboardEvent) => {
      // check if key is an Tab
      if (event.keyCode === 9) {
        const els = contentRef?.current?.querySelectorAll(
          'a[href], area[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), button:not([disabled]), [tabindex="0"]',
        )

        const focusableEls = Array.prototype.slice.call(els)
        if (focusableEls.length === 1) {
          event.preventDefault()
          return
        }

        const firstFocusableEl = focusableEls[0]
        const lastFocusableEl = focusableEls[focusableEls.length - 1]
        if (event.shiftKey && document.activeElement === firstFocusableEl) {
          event.preventDefault()
          lastFocusableEl.focus()
        } else if (document.activeElement === lastFocusableEl) {
          event.preventDefault()
          firstFocusableEl.focus()
        }
      }
    }

    document.addEventListener('keydown', listener)

    return () => {
      if (!active) return
      document.removeEventListener('keydown', listener)
    }
  }, [contentRef, active])
}
