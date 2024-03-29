/* eslint-disable @typescript-eslint/no-explicit-any */
/**
 * A generic dropdown component.  It takes the children of the component
 * and hosts it in the component.  When the component is selected, it
 * drops-down the contentComponent and applies the contentProps.
 */
import * as React from 'react'
import { useDidUpdateEffect } from '../hooks/use-did-update-effect'
import { useKey } from '../hooks/use-key'
import { useMultiSelect } from '../hooks/use-multi-select'
import { KEY } from '../lib/constants'
import { Arrow } from './arrow'
import { DropdownHeader } from './header'
import { Loading } from './loading'
import SelectPanel from './select-panel'
import { Cross } from './select-panel/cross'

const Dropdown = () => {
  const {
    t,
    onMenuToggle,
    ArrowRenderer,
    shouldToggleOnHover,
    isLoading,
    disabled,
    onChange,
    labelledBy,
    value,
    isOpen,
    defaultIsOpen,
    ClearSelectedIcon,
  } = useMultiSelect()

  const [isInternalExpand, setIsInternalExpand] = React.useState(true)
  const [expanded, setExpanded] = React.useState(defaultIsOpen)
  const [hasFocus, setHasFocus] = React.useState(false)
  const FinalArrow = ArrowRenderer || Arrow

  const wrapper: any = React.useRef()

  useDidUpdateEffect(() => {
    onMenuToggle && onMenuToggle(expanded)
  }, [expanded])

  React.useEffect(() => {
    if (defaultIsOpen === undefined && typeof isOpen === 'boolean') {
      setIsInternalExpand(false)
      setExpanded(isOpen)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isOpen])

  const handleKeyDown = (e: any) => {
    // allows space and enter when focused on input/button
    if (
      ['text', 'button'].includes(e.target.type) &&
      [KEY.SPACE, KEY.ENTER].includes(e.code)
    ) {
      return
    }

    if (isInternalExpand) {
      if (e.code === KEY.ESCAPE) {
        setExpanded(false)
        wrapper?.current?.focus()
      } else {
        setExpanded(true)
      }
    }
    e.preventDefault()
  }

  useKey([KEY.ENTER, KEY.ARROW_DOWN, KEY.SPACE, KEY.ESCAPE], handleKeyDown, {
    target: wrapper,
  })

  const handleHover = (iexpanded: boolean) => {
    isInternalExpand && shouldToggleOnHover && setExpanded(iexpanded)
  }

  const handleFocus = () => !hasFocus && setHasFocus(true)

  const handleBlur = (e: any) => {
    if (!e.currentTarget.contains(e.relatedTarget) && isInternalExpand) {
      setHasFocus(false)
      setExpanded(false)
    }
  }

  const handleMouseEnter = () => handleHover(true)

  const handleMouseLeave = () => handleHover(false)

  const toggleExpanded = () => {
    isInternalExpand && setExpanded(isLoading || disabled ? false : !expanded)
  }

  const handleClearSelected = (e: any) => {
    e.stopPropagation()
    onChange([])
    isInternalExpand && setExpanded(false)
  }

  return (
    <div
      tabIndex={0}
      className="dropdown-container"
      aria-labelledby={labelledBy}
      aria-expanded={expanded}
      aria-readonly={true}
      aria-disabled={disabled}
      ref={wrapper}
      onFocus={handleFocus}
      onBlur={handleBlur}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="dropdown-heading" onClick={toggleExpanded}>
        <div className="dropdown-heading-value">
          <DropdownHeader />
        </div>
        {isLoading && <Loading />}
        {value.length > 0 && (
          <button
            type="button"
            className="clear-selected-button"
            onClick={handleClearSelected}
            disabled={disabled}
            aria-label={t('clearSelected')}
          >
            {ClearSelectedIcon || <Cross />}
          </button>
        )}
        <FinalArrow expanded={expanded} />
      </div>
      {expanded && (
        <div className="dropdown-content">
          <div className="panel-content">
            <SelectPanel />
          </div>
        </div>
      )}
    </div>
  )
}

export default Dropdown
