import * as React from 'react'
import { CardContext } from '..'
import './card-content.css'

export interface ICardContentProps {
  children?: React.ReactNode | React.ReactNode[]
}

export const CardContent: React.FC<ICardContentProps> = ({ children }) => {
  const cardCtx = React.useContext(CardContext)
  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  const isMediaCard = cardCtx?.hasMedia
  const [media, setMedia] = React.useState(isMediaCard)
  console.log(media)

  React.useEffect(() => {
    if (media !== undefined) {
      setMedia(true)
    }

  }, [])

  return (
    <div
      className="card-content-container"
      style={{ padding: media ? '1.5rem' : '' }}
    >
      {children}
    </div>
  )
}
