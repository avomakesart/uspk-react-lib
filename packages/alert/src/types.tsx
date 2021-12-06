import * as React from 'react'

type closeButtonProps = {
  className?: string
} & React.ButtonHTMLAttributes<HTMLButtonElement> &
  React.AnchorHTMLAttributes<HTMLAnchorElement> // added this to match types on icon button

export type AlertProps = {
  className?: string
  type?: 'info' | 'success' | 'attention' | 'error' | 'warning' | undefined
  closeButton?: closeButtonProps
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  closeButtonLabel?: string | React.ReactElement<any>
} & React.HTMLAttributes<HTMLDivElement>
