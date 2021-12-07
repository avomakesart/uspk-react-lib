import * as React from 'react'
import { MultiSelect } from '../src'
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
  const [selected, setSelected] = React.useState([])
  const options = [
    { label: 'Grapes 🍇', value: 'grapes' },
    { label: 'Mango 🥭', value: 'mango' },
    { label: 'Strawberry 🍓', value: 'strawberry' },
  ]
  return (
    <div>
      <MultiSelect
        label="Select Fruits"
        options={options}
        value={selected}
        onChange={setSelected}
        labelledBy="Select"
      />

      <pre>{JSON.stringify(selected)}</pre>
    </div>
  )
}
