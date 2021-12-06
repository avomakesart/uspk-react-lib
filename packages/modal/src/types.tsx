import * as React from 'react'

export interface IModalProps {
  children: React.ReactNode | React.ReactNode[]
  onClose: () => void
  open?: boolean
  noOverlay?: boolean
  width?: string
}
