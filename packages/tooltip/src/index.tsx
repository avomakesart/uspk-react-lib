/* eslint-disable react/display-name */
import * as React from 'react'
import './tooltip.css'

interface TooltipProps {
  delay?: number
  children?: React.ReactNode | React.ReactNode[]
  position?: string
  content?: string
}

const Tooltip = React.forwardRef<HTMLDivElement, TooltipProps>(
  ({ delay, children, position, content, ...rest }, ref) => {
    const [active, setActive] = React.useState(false)
    let timeout: any

    const showTip = () => {
      timeout = setTimeout(() => {
        setActive(true)
      }, delay || 400)
    }

    const hideTip = () => {
      clearInterval(timeout)
      setActive(false)
    }

    return (
      <div
        className="tooltip-wrapper"
        onMouseEnter={showTip}
        onMouseLeave={hideTip}
        ref={ref}
        {...rest}
      >
        {children}
        {active && (
          <div className={`tooltip-tip tooltip-tip-${position || 'top'}`}>{content}</div>
        )}
      </div>
    )
  },
)

export { Tooltip }
