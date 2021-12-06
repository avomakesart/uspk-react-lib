import * as React from 'react'
import './card-media.css'

export interface ICardMediaProps {
  source?: string | undefined
  alt?: string | undefined
}

export const CardMedia: React.FC<ICardMediaProps> = ({ source, alt }) => {
  return (
    <div className="card-media-container">
      <img alt={alt} src={source} className="card-media-image" />
    </div>
  )
}
