import * as React from 'react'
import { Tooltip } from '../src'

export default {
  title: 'Components/Tooltip',
  parameters: {
    tags: ['tooltip', 'uspk', 'react'],
    // docs: {
    //   page: mdx,
    // },
  },
}

export const Default = () => {
  return (
    <Tooltip content="Yee-haw!" position="right">
      <span className="example-emoji" role="img" aria-label="cowboy emoji">
        🤠
      </span>
    </Tooltip>
  )
}
