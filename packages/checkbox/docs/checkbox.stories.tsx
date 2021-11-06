import React, { ChangeEvent, useState } from 'react'
import { Checkbox } from '../src'
import mdx from './checkbox.mdx'

export default {
  title: 'Components/Inputs/Checkbox',
  parameters: {
    tags: ['checkbox', 'uspk', 'react'],
    layout: 'centered',
    docs: {
      page: mdx,
    },
  },
}

const Example = args => {
  const [isChecked, setIsChecked] = useState(false)

  const handleCheck = (ev: ChangeEvent<HTMLInputElement>) => {
    setIsChecked(ev.target.checked)
  }

  return (
    <Checkbox
      onCheck={handleCheck}
      checked={isChecked}
      name="checked"
      label="Do you like coffee?"
      {...args}
    />
  )
}

export const Default = Example.bind({})

Default.args = {
  checked: true,
}
