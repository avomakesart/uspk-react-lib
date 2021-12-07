/* eslint-disable @typescript-eslint/no-explicit-any */
import * as React from 'react'
import { SelectInput } from '../src'
import mdx from './select.mdx'

export default {
  title: 'Components/Select',
  parameters: {
    tags: ['text-field', 'uspk', 'react'],
    layout: 'centered',
    docs: {
      page: mdx,
    },
  },
}

export const Default = () => {
  const [value, setValue] = React.useState('')

  const inputData = ['México', 'USA', 'UK']

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setValue(e.target.value)
  }

  return (
    <SelectInput
      label="Where do you live?"
      data={inputData}
      handleChange={handleChange}
      selectedValue={value}
      name="value"
      defaultValue="Choose your country"
      required
    />
  )
}

export const WithValidationError = () => {
  const [value, setValue] = React.useState('')

  const inputData = ['México', 'USA', 'UK']

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setValue(e.target.value)
  }

  return (
    <SelectInput
      label="Where do you live?"
      data={inputData}
      handleChange={handleChange}
      selectedValue={value}
      name="value"
      defaultValue="Choose your country"
      error
      errorMessage="This is a required field"
      required
    />
  )
}

export const DisabledSelect = () => {
  const [value, setValue] = React.useState('')

  const inputData = ['México', 'USA', 'UK']

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setValue(e.target.value)
  }

  return (
    <SelectInput
      label="Where do you live?"
      data={inputData}
      handleChange={handleChange}
      selectedValue={value}
      name="value"
      defaultValue="Choose your country"
      disabled
      required
    />
  )
}

export const MultipleSelection = () => {
  const [selectedValue, setSelectedValue] = React.useState([])

  const inputData = ['México', 'USA', 'UK']

  const handleSelect = (selectedValues: any) => {
    const values = []
    for (let i = 0; i < selectedValues.length; i++) {
      console.log(selectedValues[i].value)

      values.push(selectedValues[i].value)
    }
    setSelectedValue(selectedValue)
  }

  console.log(selectedValue)

  return (
    <>
      <SelectInput
        label="Where do you live?"
        data={inputData}
        handleChange={e => handleSelect(e.target.selectedOptions)}
        selectedValue={selectedValue}
        name="selectedValue"
        defaultValue="Choose your country"
        multiple
        required
      />
      {JSON.stringify(selectedValue, null, 4)}
    </>
  )
}
