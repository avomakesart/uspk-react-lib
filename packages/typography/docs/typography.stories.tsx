import * as React from 'react'
import { Typography } from '../src'
import mdx from './typography.mdx'

export default {
  title: 'Data Display/Typography',
  parameters: {
    tags: ['typography', 'uspk', 'react'],
    docs: {
      page: mdx,
    },
  },
}

export const Headings = () => {
  return (
    <>
      <Typography variant="h1" color="primary">
        Heading 1
      </Typography>

      <Typography variant="h2" color="primary">
        Heading 2
      </Typography>

      <Typography variant="h3" color="primary">
        Heading 3
      </Typography>

      <Typography variant="h4" color="primary">
        Heading 4
      </Typography>

      <Typography variant="h5" color="primary">
        Heading 5
      </Typography>

      <Typography variant="h6" color="primary">
        Heading 6
      </Typography>
    </>
  )
}

export const SubHeadings = () => {
  return (
    <>
      <Typography variant="subheading1" color="primary">
        Subheading
      </Typography>

      <Typography variant="subheading2" color="primary">
        Subheading
      </Typography>
    </>
  )
}

export const Body = () => {
  return (
    <>
      <Typography variant="body1" color="primary">
        Subheading
      </Typography>

      <Typography variant="body2" color="primary">
        Subheading
      </Typography>
    </>
  )
}
