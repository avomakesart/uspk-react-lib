import React from 'react'
import { IAccordionRowProps, AccordionRow } from './accordion-row/index'
import './accordion.css'

interface IAccordionProps {
  children: React.ReactNode | React.ReactNode[]
}

interface IAccordionComposition {
  Row: React.FC<IAccordionRowProps>
}

export const AccordionContext = React.createContext<
  IAccordionProps | undefined
>(undefined)

const Accordion: React.FC<IAccordionProps> & IAccordionComposition = ({
  children,
}) => {
  return (
    <AccordionContext.Provider value={undefined}>
      <div className="accordion-container">
        <ul className="accordion-wrapper">{children}</ul>
      </div>
    </AccordionContext.Provider>
  )
}

Accordion.Row = AccordionRow

export { Accordion }
