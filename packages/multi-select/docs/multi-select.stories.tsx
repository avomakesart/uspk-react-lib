import React, { useState } from 'react'
import MultiSelect from '../src'
import mdx from './multi-select.mdx'

export default {
  title: 'Components/Select/Multi Select',
  parameters: {
    tags: ['text-field', 'uspk', 'react'],
    // layout: 'centered',
    docs: {
      page: mdx,
    },
  },
}

export const Example = () => {
  const [selected, setSelected] = useState([])
  const options = [
    { label: 'Grapes 🍇', value: 'grapes' },
    { label: 'Mango 🥭', value: 'mango' },
    { label: 'Strawberry 🍓', value: 'strawberry' },
  ]
  return (
    <div>
      <h1>Select Fruits</h1>

      <MultiSelect
        options={options}
        value={selected}
        onChange={setSelected}
        labelledBy="Select"
      />

      <pre>{JSON.stringify(selected)}</pre>
    </div>
  )
}
