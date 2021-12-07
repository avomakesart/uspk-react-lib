/* eslint-disable @typescript-eslint/no-explicit-any */
import * as React from 'react'
import { Radio, RadioButton } from '../src'
import mdx from './radio.mdx'

export default {
  title: 'Components/RadioButton',
  component: Radio,
  parameters: {
    tags: ['link', 'dxui', 'react'],
    docs: {
      page: mdx,
    },
  },
}

export const Default = () => {
  const [selected, setSelected] = React.useState<any>()
  return (
    <>
      <Radio
        id="RadioButtonLiveEdit"
        name="liveEdit"
        value="pizza"
        label="Field Label"
        helperText=""
        checked={selected === 'pizza'}
        onChange={event => setSelected(event.target.value)}
      />
    </>
  )
}

export const RadioGroup = () => {
  const [selectedTwo, setSelectedTwo] = React.useState<any>()
  console.log(selectedTwo)

  return (
    <RadioButton
      id="RadioButtonLiveEdit"
      name="liveEdit"
      value={selectedTwo}
      label="Field Label"
      helperText=""
      onChange={event => setSelectedTwo(event.target.value)}
      options={[
        { label: 'Pizza', value: 'pizza' },
        { label: 'Burger', value: 'burger' },
      ]}
    />
  )
}
