/* eslint-disable @typescript-eslint/no-explicit-any */
import * as React from 'react'

import { useDeepCompareMemoize } from '../use-deep-compare-memoize'

export const useOnClickOutside = (
  $ignoredElementRefs: any,
  isListening: any,
  onOutsideClick: () => void,
  $listeningElementRef: any,
) => {
  const $mouseDownTargetRef = React.useRef()
  const $ignoredElementRefsMemoized = useDeepCompareMemoize(
    [$ignoredElementRefs].flat(),
  ) as any

  React.useEffect(() => {
    const handleMouseDown = (event: { target: undefined }) => {
      $mouseDownTargetRef.current = event.target
    }

    const handleMouseUp = (event: { target: any; button: number }) => {
      const isAnyIgnoredElementAncestorOfTarget = $ignoredElementRefsMemoized.some(
        ($elementRef: { current: { contains: (arg0: undefined) => any } }) =>
          $elementRef.current.contains($mouseDownTargetRef.current) ||
          $elementRef.current.contains(event.target),
      )
      if (event.button === 0 && !isAnyIgnoredElementAncestorOfTarget) {
        onOutsideClick()
      }
    }

    const $listeningElement = ($listeningElementRef || {}).current || document

    if (isListening) {
      $listeningElement.addEventListener('mousedown', handleMouseDown)
      $listeningElement.addEventListener('mouseup', handleMouseUp)
    }
    return () => {
      $listeningElement.removeEventListener('mousedown', handleMouseDown)
      $listeningElement.removeEventListener('mouseup', handleMouseUp)
    }
  }, [
    $ignoredElementRefsMemoized,
    $listeningElementRef,
    isListening,
    onOutsideClick,
  ])
}
