import React, { useEffect } from 'react'
import { createPortal } from 'react-dom'

import { usePortalsManager } from './hooks/use-portals-manager'
import { useUniqueId } from '../../custom-hooks/src'

export interface PortalProps {
  children?: React.ReactNode
  idPrefix?: string
  onPortalCreated?(): void
}

export function Portal({
  children,
  idPrefix = '',
  onPortalCreated = noop,
}: PortalProps) {
  const { container } = usePortalsManager()

  const uniqueId = useUniqueId('portal')
  const portalId = idPrefix !== '' ? `${idPrefix}-${uniqueId}` : uniqueId

  useEffect(() => {
    onPortalCreated()
  }, [onPortalCreated])

  return container
    ? createPortal(<div data-portal-id={portalId}>{children}</div>, container)
    : null
}

// eslint-disable-next-line @typescript-eslint/no-empty-function
function noop() {}
