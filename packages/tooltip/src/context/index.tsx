import React, { createContext, useState } from 'react'

type ContextProps = {
  show: boolean
  setShow: (value: boolean) => void
  top: number
  setTop: (value: number) => void
  left: number
  setLeft: (value: number) => void
  content: string
  setContent: (value: string) => void
}

type TooltipProviderProps = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  children: any
}

export const TooltipContext = createContext<ContextProps>({} as ContextProps)

export function ToolTipProvider({ children }: TooltipProviderProps) {
  const [show, setShow] = useState(false)
  const [top, setTop] = useState(0)
  const [left, setLeft] = useState(0)
  const [content, setContent] = useState('')

  return (
    <TooltipContext.Provider
      value={{ show, setShow, top, setTop, left, setLeft, content, setContent }}
    >
      {children}
    </TooltipContext.Provider>
  )
}
