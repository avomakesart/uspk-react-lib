/* eslint-disable @typescript-eslint/no-explicit-any */
import React, {useEffect, useState} from 'react'
import {CheckIcon} from './assets/icons/CheckIcon'
import './custom-select.css'
import {nanoid} from 'nanoid'

interface CustomSelectProps {
  label?: string | undefined
  items?: string[] | undefined
  value?: any
}

export const CustomSelect: React.FC<CustomSelectProps> = ({
  items,
  label,
  value,
}) => {
  const [selected, setSelected] = useState([])
  const [open, setOpen] = useState(false)

  const handleOpen = () => setOpen(!open)

  const handleSelect = (item: any) => () => {
    setSelected(item)
    setOpen(false)
  }

  useEffect(() => {
    setSelected(value)
    return () => {
      setSelected([])
    }
  }, [value])

  return (
    <>
      <div>
        <label id="listbox-label" className="custom-select-label">
          {label}
        </label>
        <div className="custom-select-container">
          <button
            type="button"
            className="custom-select"
            aria-haspopup="listbox"
            aria-expanded="true"
            aria-labelledby="listbox-label"
            onClick={handleOpen}
          >
            <span className="custom-select-item-container">
              <span className="custom-select-item">
                {!selected ? 'Selecciona una opción' : selected}
              </span>
            </span>
            <span className="custom-select-icon-container">
              {/* <!-- Heroicon name: solid/selector --> */}
              <svg
                className="h-5 w-5 text-gray-400"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M10 3a1 1 0 01.707.293l3 3a1 1 0 01-1.414 1.414L10 5.414 7.707 7.707a1 1 0 01-1.414-1.414l3-3A1 1 0 0110 3zm-3.707 9.293a1 1 0 011.414 0L10 14.586l2.293-2.293a1 1 0 011.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </span>
          </button>

          {open && (
            <ul
              className="custom-select-item-list-container"
              tabIndex={-1}
              role="listbox"
              aria-labelledby="listbox-label"
              aria-activedescendant="listbox-option-3"
            >
              {items?.map((item: any) => (
                <li
                  className="custom-select-item-list-nested-container"
                  id="listbox-option-0"
                  role="option"
                  key={nanoid()}
                >
                  <div className="custom-select-item-list-wrapper">
                    <span
                      className={`
                    ${
                      !selected === value
                        ? 'custom-select-list-item custom-select-list-item-active'
                        : 'custom-select-list-item'
                    }`}
                      onClick={handleSelect(item)}
                    >
                      {item}
                    </span>

                    {selected === item && (
                      <span>
                        <CheckIcon className="custom-select-icon" />
                      </span>
                    )}
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </>
  )
}
