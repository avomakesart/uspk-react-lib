import { createContext } from 'react'

type PortalsContainerElement = HTMLDivElement | null

export interface PortalsManager {
  container: PortalsContainerElement
}

export const PortalsManagerContext = createContext<PortalsManager | undefined>(
  undefined,
)
