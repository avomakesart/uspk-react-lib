import { useContext, useRef } from 'react'
import { MissingAppProviderError } from './utils/missing-app-provider-error'
import { UniqueIdFactoryContext } from './context'

/**
 * Returns a unique id that remains consistent across multiple re-renders of the
 * same hook
 * @param prefix Defines a prefix for the ID. You probably want to set this to
 *   the name of the component you're calling `useUniqueId` in.
 * @param overrideId Defines a fixed value to use instead of generating a unique
 *   ID. Useful for components that allow consumers to specify their own ID.
 */

export function useUniqueId(prefix = '', overrideId = '') {
  const idFactory = useContext(UniqueIdFactoryContext)

  const uniqueIdRef = useRef<string | null>(null)

  if (!idFactory) {
    throw new MissingAppProviderError('No UniqueIdFactory was provided.')
  }
  if (overrideId) {
    return overrideId
  }

  if (!uniqueIdRef.current) {
    uniqueIdRef.current = idFactory.nextId(prefix)
  }

  return uniqueIdRef.current
}
