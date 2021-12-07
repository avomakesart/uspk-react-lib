import * as React from 'react'
import { CardContent, ICardContentProps } from './card-content'
import { CardFooter, ICardFooterProps } from './card-footer/index'
import { CardHeader, ICardHeaderProps } from './card-header'
import { CardMedia, ICardMediaProps } from './card-media/index'
import './card.css'
import { ICardProps } from './types'

interface ICardComposition {
  Header: React.FC<ICardHeaderProps>
  Media: React.FC<ICardMediaProps>
  Content: React.FC<ICardContentProps>
  Footer: React.FC<ICardFooterProps>
}

export const CardContext = React.createContext<ICardProps | undefined>(
  undefined,
)

const Card: React.FC<ICardProps> & ICardComposition = ({
  children,
  hasMedia,
}) => {
  return (
    <CardContext.Provider value={{ hasMedia, children }}>
      <div className="card-container">{children}</div>
    </CardContext.Provider>
  )
}

Card.Header = CardHeader
Card.Content = CardContent
Card.Footer = CardFooter
Card.Media = CardMedia

export { Card }
