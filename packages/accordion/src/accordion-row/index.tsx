import * as React from 'react'
import { Arrow } from '../assets/icons/arrow'
import './accordion-row.css'

export interface IAccordionRowProps {
  title: string
  children: React.ReactNode | React.ReactNode[]
}

export const AccordionRow: React.FC<IAccordionRowProps> = ({
  title,
  children,
}) => {
  const [isExpanded, setIsExpanded] = React.useState(false)

  const handleExpandRow = () => setIsExpanded(prev => !prev)

  console.log('====================================')
  console.log(isExpanded)
  console.log('====================================')

  return (
    <li className="accordion-wrapper__list">
      <button
        onClick={handleExpandRow}
        type="button"
        className="accordion-item__button"
      >
        <div className="accordion-item__title-container">
          <span>{title}</span>
          {/* <span className="ico-plus"></span> */}
          <Arrow expanded={isExpanded} />
        </div>
      </button>

      {isExpanded && (
        <div className="accordion-content__container">
          <div className="accordion-content__wrapper">{children}</div>
        </div>
      )}
    </li>
  )
}
