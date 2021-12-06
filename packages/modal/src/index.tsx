import React, { useCallback, useRef, useState } from 'react'
import { OutlineX } from './assets/icons/outline-x'
import { useOnClickOutside, useOnEscapeKeyDown } from './hooks'
import './modal.css'
import { IModalProps } from './types'

export const Modal: React.FC<IModalProps> = ({
  children,
  onClose: onParentClose,
  open: propsIsOpen,
  noOverlay,
  width,
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const isControlled = typeof propsIsOpen === 'boolean'
  const open = isControlled ? propsIsOpen : isModalOpen

  const modalContent = useRef(null)
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const clickableOverlayRef = useRef<any>()

  const handleClose = useCallback(() => {
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
    <>
      <div className="modal--wrapper">
        <div
          className={noOverlay ? 'modal--no-overlay' : 'modal--overlay'}
          ref={clickableOverlayRef}
        >
          <div
            className="modal--container"
            style={{ width: width }}
            ref={modalContent}
          >
            <span className="modal--icon-wrapper" onClick={handleClose}>
              <OutlineX />
            </span>
            <div className="modal--container-inner">{children}</div>
          </div>
        </div>
      </div>
    </>
  )
}
