import * as React from 'react'

export type IContainerProps = {
  centerContent?: boolean
  className?: string
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const Container = React.forwardRef<IContainerProps, any>(
  (props, ref) => {
    const { centerContent, className, ...rest } = props

    const baseStyle = {
      width: '100%',
      marginInline: 'auto',
      maxWidth: '60ch',
      paddingInline: '1rem',
    }

    const styles = centerContent && {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    }

    return (
      <div
        ref={ref}
        style={{ ...baseStyle, ...styles }}
        className={className}
        {...rest}
      />
    )
  },
)
