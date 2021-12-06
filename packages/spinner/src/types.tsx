/* eslint-disable @typescript-eslint/no-explicit-any */
import * as React from 'react'

export type ILoadingSpinnerProps = {
  /**
   * The color of the empty area in the spinner
   */
  emptyColor?: string
  /**
   * The color of the spinner
   */
  color?: string
  /**
   * The thickness of the spinner
   * @example
   * ```jsx
   * <Spinner thickness="4px"/>
   * ```
   */
  thickness?: string
  /**
   * The speed of the spinner.
   * @example
   * ```jsx
   * <Spinner speed="0.2s"/>
   * ```
   */
  speed?: string
  /**
   * For accessibility, it is important to add a fallback loading text.
   * This text will be visible to screen readers.
   */
  label?: string

  width?: string
  height?: string

  className?: string
}

export interface IconSpinProps {
  className?: string
  style?: React.CSSProperties
  fill?: string
  stroke?: string
  width?: string
  height?: string
}
