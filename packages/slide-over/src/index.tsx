import * as React from 'react'
import { useOnClickOutside, useOnEscapeKeyDown } from '../../custom-hooks/src'
import { OutlineX } from './assets/icons/outline-x'
import './slide-over.css'
import { SlideOverProps } from './types'

export const SlideOver: React.FC<SlideOverProps> = ({
  children,
  onClose: onParentClose,
  open: propsIsOpen,
  align,
  noOverlay,
}) => {
  const [isModalOpen, setIsModalOpen] = React.useState(false)
  const isControlled = typeof propsIsOpen === 'boolean'
  const open = isControlled ? propsIsOpen : isModalOpen

  const modalContent = React.useRef(null)
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const clickableOverlayRef = React.useRef<any>()

  const handleClose = React.useCallback(() => {
    if (!isControlled) {
      setIsModalOpen(false)
    } else {
      onParentClose()
    }
  }, [isControlled, onParentClose])

  useOnClickOutside(modalContent, open, handleClose, clickableOverlayRef)
  useOnEscapeKeyDown(open, onParentClose)

  if (!open) return null
  return (
    <div className="slide--over-wrapper">
      <div
        className={noOverlay ? 'slide--over-no-overlay' : 'slide--over-overlay'}
        ref={clickableOverlayRef}
      >
        <div
          className={
            align ? `slide--over-container-${align}` : 'slide--over-container'
          }
          ref={modalContent}
        >
          <span
            className={
              align
                ? `slide--over-icon-wrapper-${align}`
                : 'slide--over-icon-wrapper'
            }
            onClick={onParentClose}
          >
            <OutlineX />
          </span>

          <div className="slide--over-content-wrapper">{children}</div>
        </div>
      </div>
    </div>
  )
}
