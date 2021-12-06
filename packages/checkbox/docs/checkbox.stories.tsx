import React, { ChangeEvent, useState } from 'react'
import { Checkbox, CheckboxGroup } from '../src/index'
import mdx from './checkbox.mdx'

export default {
  title: 'Components/Inputs/Checkbox',
  parameters: {
    tags: ['checkbox', 'uspk', 'react'],
    docs: {
      page: mdx,
    },
  },
}

const Example = args => {
  const [isChecked, setIsChecked] = useState<any>(false)
  const [checkVal, setCheckVal] = useState('')

  const handleCheck = (ev: ChangeEvent<HTMLInputElement>) => {
    setIsChecked(!isChecked)
    setCheckVal(ev.target.value)
  }

  console.log(checkVal)

  return (
    <Checkbox
      label="A single checkbox"
      name="check2"
      helperText="This is an example of helper text"
      error={false}
      errorText=""
      value="pizza"
      checked={isChecked}
      onChange={handleCheck}
      // {...args}
    />
  )
}

export const Default = Example.bind({})

Default.args = {
  checked: true,
}

const options = [
  { label: 'Pizza', value: 'pizza' },
  { label: 'Burger', value: 'burger' },
]

export const CheckboxGroupWithHelperTextGroupLevel = () => {
  const [values, setValues] = useState<any>([])

  console.log(values)

  return (
    <CheckboxGroup
      name="fruits"
      options={values}
      onChange={setValues}
      label="Field Label"
      helperText="This is an example to of helper text"
    >
      {Checkbox => (
        <>
          <Checkbox value="one" label="One" />
          <Checkbox value="two" label="Two" />
        </>
      )}
    </CheckboxGroup>
  )
}

export const CheckboxGroupWithHelperTextInputLevel = () => {
  const [values, setValues] = useState<any>([])

  console.log(values)

  return (
    <CheckboxGroup
      name="fruits"
      options={values}
      onChange={setValues}
      label="Field Label"
    >
      {Checkbox => (
        <>
          <Checkbox value="one" label="One" helperText="This is helper text" />
          <Checkbox value="two" label="Two" helperText="This is helper text" />
        </>
      )}
    </CheckboxGroup>
  )
}

export const CheckboxGroupWithErrorState = () => {
  const [values, setValues] = useState<any>([])

  console.log(values)

  return (
    <CheckboxGroup
      name="values"
      options={values}
      onChange={setValues}
      label="Field Label"
      error
      errorText="This is inline error"
    >
      {Checkbox => (
        <>
          <Checkbox value="one" label="One" />
          <Checkbox value="two" label="Two" />
        </>
      )}
    </CheckboxGroup>
  )
}
