import React, { useState } from 'react'
import { CustomSelect } from '../src'
import mdx from './custom-select.mdx'

export default {
  title: 'Components/Select/Custom Select',
  parameters: {
    tags: ['custom-select', 'uspk', 'react'],
    docs: {
      page: mdx,
    },
  },
}

export const Default = () => {
  const [value] = useState([])
  const options = [
    { label: 'Grapes 🍇', value: 'grapes' },
    { label: 'Mango 🥭', value: 'mango' },
    { label: 'Watermelon 🍉', value: 'watermelon' },
    { label: 'Pear 🍐', value: 'pear' },
  ]

  return (
    <CustomSelect
      label="What is your favorite fruit?"
      items={options}
      value={value}
      placeHolder="Select a fruit"
    />
  )
}
