import * as React from 'react'

export interface IconProps {
  width?: string
  height?: string
  primaryColor?: string
  secondaryColor?: string
  thirdColor?: string
  fourthColor?: string
  fifthColor?: string
  sixthColor?: string
  seventhColor?: string
  eighthColor?: string
  ninthColor?: string
  tenthColor?: string
}

export interface SlideOverProps {
  children?: React.ReactNode | React.ReactNode[]
  onClose: () => void
  open: boolean
  align?: string
  noOverlay?: boolean
}
