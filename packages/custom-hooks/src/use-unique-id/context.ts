import { createContext } from 'react'

import type { UniqueIdFactory } from './utils/unique-id-factory'

export const UniqueIdFactoryContext = createContext<
  UniqueIdFactory | undefined
>(undefined)
