import React, {ChangeEvent, useState} from 'react'
import {CustomSelect} from '../src'
import mdx from './custom-select.mdx'

export default {
  title: 'Components/Select/Custom Select',
  parameters: {
    tags: ['text-field', 'uspk', 'react'],
    // layout: 'centered',
    docs: {
      page: mdx,
    },
  },
}

export const Default = () => {
  const [value, setValue] = useState('')

  const inputData = ['México', 'USA', 'UK']

  const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setValue(e.target.value)
  }

  return (
    <CustomSelect label="Where do you live?" items={inputData} value={value} />
  )
}
