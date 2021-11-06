/* eslint-disable @typescript-eslint/no-explicit-any */
import * as React from 'react'

import { injectStyles } from '../lib/inject-style'
import { ISelectProps, Option } from '../lib/interfaces'

const defaultStrings = {
  allItemsAreSelected: 'All items are selected.',
  clearSearch: 'Clear Search',
  clearSelected: 'Clear Selected',
  noOptions: 'No options',
  search: 'Search',
  selectAll: 'Select All',
  selectAllFiltered: 'Select All (Filtered)',
  selectSomeItems: 'Select...',
  create: 'Create',
} as any

const defaultProps: Partial<ISelectProps> = {
  value: [],
  hasSelectAll: true,
  className: 'multi-select',
  debounceDuration: 200,
  options: [] as Option[],
}

interface MultiSelectContextProps extends ISelectProps {
  t: (key: string) => string
  setOptions?: any
}

interface MultiSelectProviderProps {
  props: ISelectProps
  children: any
}

const MultiSelectContext = React.createContext<MultiSelectContextProps>(
  {} as MultiSelectContextProps,
)

export const MultiSelectProvider = ({
  props,
  children,
}: MultiSelectProviderProps) => {
  const [options, setOptions] = React.useState(props.options)
  const t = (key: any) => props.overrideStrings?.[key] || defaultStrings[key]

  React.useMemo(() => injectStyles(), [])

  React.useEffect(() => {
    setOptions(props.options)
  }, [props.options])

  return (
    <MultiSelectContext.Provider
      value={{ t, ...defaultProps, ...props, options, setOptions }}
    >
      {children}
    </MultiSelectContext.Provider>
  )
}

export const useMultiSelect = () => React.useContext(MultiSelectContext)
