import React, { useState } from 'react'
import { SlideOver } from '../src'
import mdx from './slide-over.mdx'
import { Button } from '../../buttons/src'

export default {
  title: 'Feedback/Slide Over',
  parameters: {
    tags: ['slideover', 'uspk', 'react'],
    docs: {
      page: mdx,
    },
  },
}

export const Default = () => {
  const [isOpen, setIsOpen] = useState(false)

  const handleOpenModal = () => setIsOpen(prev => !prev)
  const handleCloseModal = () => setIsOpen(false)

  return (
    <>
      <Button onClick={handleOpenModal} type="button" primary>
        Open modal
      </Button>

      <SlideOver onClose={handleCloseModal} open={isOpen}>
        Hello world
      </SlideOver>
    </>
  )
}

export const NoOverlay = () => {
  const [isOpen, setIsOpen] = useState(false)

  const handleOpenModal = () => setIsOpen(prev => !prev)
  const handleCloseModal = () => setIsOpen(false)

  return (
    <>
      <Button onClick={handleOpenModal} type="button" primary>
        Open modal
      </Button>

      <SlideOver onClose={handleCloseModal} open={isOpen} noOverlay>
        Hello world
      </SlideOver>
    </>
  )
}

export const RightAlign = () => {
  const [isOpen, setIsOpen] = useState(false)

  const handleOpenModal = () => setIsOpen(prev => !prev)
  const handleCloseModal = () => setIsOpen(false)

  return (
    <>
      <Button onClick={handleOpenModal} type="button" primary>
        Open modal
      </Button>

      <SlideOver onClose={handleCloseModal} open={isOpen} align="right">
        Hello world
      </SlideOver>
    </>
  )
}
