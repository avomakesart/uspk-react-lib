export type IToastHookProps = {
  message: string
  title?: string
  variant: 'success' | 'error' | 'info' | 'warning'
  style?: React.CSSProperties
  position?:
    | 'top-right'
    | 'bottom-right'
    | 'top-left'
    | 'bottom-left'
    | 'top-center'
    | 'bottom-center'
  duration?: number
  isOpen?: boolean | undefined
}

export type IToastProps = {
  title?: string
  message: string
  variant: 'success' | 'error' | 'info' | 'warning'
  style?: React.CSSProperties
  position?:
    | 'top-right'
    | 'bottom-right'
    | 'top-left'
    | 'bottom-left'
    | 'top-center'
    | 'bottom-center'
  duration?: number
  isOpen?: boolean | undefined
}
