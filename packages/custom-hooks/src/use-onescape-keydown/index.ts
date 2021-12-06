import { useEffect } from 'react'

export const useOnEscapeKeyDown = (
  isListening: boolean,
  onClose: () => void,
) => {
  // close the modal if the esc key is pressed
  useEffect(() => {
    const keyHandler = (event: KeyboardEvent) => {
      if (event.keyCode === 27) {
        onClose()
      }
    }
    if (isListening) {
      document.addEventListener('keydown', keyHandler)
    }

    return () => document.removeEventListener('keydown', keyHandler)
  }, [isListening, onClose])
}
