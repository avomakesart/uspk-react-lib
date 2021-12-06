import React, { useState } from 'react'
import { Modal } from '../src'
import mdx from './modal.mdx'
import { Button } from '../../buttons/src'

export default {
  title: 'Feedback/Modal',
  parameters: {
    tags: ['custom-select', 'uspk', 'react'],
    docs: {
      page: mdx,
    },
  },
}

export const Default = () => {
  const [modalOpen, setModalOpen] = useState(false)

  const handleOpenModal = () => setModalOpen(prev => !prev)
  const handleCloseModal = () => setModalOpen(false)

  return (
    <>
      <Button onClick={handleOpenModal} type="button" primary>
        Open modal
      </Button>

      <Modal onClose={handleCloseModal} open={modalOpen}>
        Hello world
      </Modal>
    </>
  )
}

export const NoOverlay = () => {
  const [modalOpen, setModalOpen] = useState(false)

  const handleOpenModal = () => setModalOpen(prev => !prev)
  const handleCloseModal = () => setModalOpen(false)

  return (
    <>
      <Button onClick={handleOpenModal} type="button" primary>
        Open modal
      </Button>

      <Modal onClose={handleCloseModal} open={modalOpen} noOverlay>
        Hello world
      </Modal>
    </>
  )
}
