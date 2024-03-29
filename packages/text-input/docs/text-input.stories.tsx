import * as React from 'react'
import { TextInput } from '../src'
import { SearchIcon } from '../src/assets/icons/search-icon/index'
import mdx from './text-input.mdx'

export default {
  title: 'Components/TextInput',
  parameters: {
    tags: ['text-field', 'uspk', 'react'],
    layout: 'centered',
    docs: {
      page: mdx,
    },
  },
}

export const DefaultTextInput = () => {
  const [inputField, setInputField] = React.useState('I am doing great')

  return (
    <TextInput
      name={inputField}
      type="text"
      value={inputField}
      onChange={e => setInputField(e.target.value)}
      label="How are you doing?"
      placeHolder="Type your feeling right here"
    />
  )
}

export const NumberInput = () => {
  const [inputField, setInputField] = React.useState('25')

  return (
    <TextInput
      name={inputField}
      type="number"
      value={inputField}
      onChange={e => setInputField(e.target.value)}
      label="How much is 5 + 5:"
      placeHolder="Your answer here"
    />
  )
}

export const EmailInput = () => {
  const [inputField, setInputField] = React.useState('email@email.com')

  return (
    <TextInput
      name={inputField}
      type="email"
      value={inputField}
      onChange={e => setInputField(e.target.value)}
      label="Email Address:"
      placeHolder="email@email.com"
    />
  )
}

export const PasswordInput = () => {
  const [inputField, setInputField] = React.useState('')

  return (
    <TextInput
      name={inputField}
      type="password"
      value={inputField}
      label="Password"
      onChange={e => setInputField(e.target.value)}
      placeHolder="*********"
    />
  )
}

export const WithRequiredMark = () => {
  const [inputField, setInputField] = React.useState('John Doe')

  return (
    <TextInput
      name={inputField}
      type="text"
      value={inputField}
      onChange={e => setInputField(e.target.value)}
      label="Tell us your name"
      required
      placeHolder="email@email.com"
    />
  )
}

export const WithValidationError = () => {
  const [inputField, setInputField] = React.useState('')

  return (
    <TextInput
      name={inputField}
      type="email"
      value={inputField}
      onChange={e => setInputField(e.target.value)}
      label="Email Address:"
      required
      error
      errorText="This is a required field"
      placeHolder="email@email.com"
    />
  )
}

export const WithSuccessMessage = () => {
  const [inputField, setInputField] = React.useState('')

  return (
    <TextInput
      name={inputField}
      type="email"
      value={inputField}
      onChange={e => setInputField(e.target.value)}
      label="Email Address:"
      required
      successText={[
        'First line of success text',
        'Second line here',
        'Even a third line',
      ]}
      placeHolder="email@email.com"
    />
  )
}

export const DisabledTextInput = () => {
  const [inputField, setInputField] = React.useState('')

  return (
    <TextInput
      name={inputField}
      type="email"
      value={inputField}
      onChange={e => setInputField(e.target.value)}
      label="Email Address:"
      required
      disabled
      placeHolder="email@email.com"
    />
  )
}

export const WithoutLabel = () => {
  const [inputField, setInputField] = React.useState('')

  return (
    <TextInput
      name={inputField}
      type="text"
      value={inputField}
      onChange={e => setInputField(e.target.value)}
      placeHolder="Your favorite food"
    />
  )
}

export const WithLeftIcon = () => {
  const [inputField, setInputField] = React.useState('')

  return (
    <TextInput
      name={inputField}
      type="text"
      value={inputField}
      onChange={e => setInputField(e.target.value)}
      placeHolder="Your favorite food"
      label="Make a search"
      leftIcon={<SearchIcon />}
    />
  )
}

export const WithRightIcon = () => {
  const [inputField, setInputField] = React.useState('')

  return (
    <TextInput
      name={inputField}
      type="text"
      value={inputField}
      onChange={e => setInputField(e.target.value)}
      placeHolder="Your favorite food"
      label="Make a search"
      rightIcon={<SearchIcon />}
    />
  )
}

export const WithPrefix = () => {
  const [inputField, setInputField] = React.useState('')

  return (
    <TextInput
      name={inputField}
      type="text"
      value={inputField}
      onChange={e => setInputField(e.target.value)}
      placeHolder="Your favorite food"
      label="Type a quantity"
      prefix="$"
    />
  )
}

export const WithSuffix = () => {
  const [inputField, setInputField] = React.useState('')

  return (
    <TextInput
      name={inputField}
      type="text"
      value={inputField}
      onChange={e => setInputField(e.target.value)}
      placeHolder="Your favorite food"
      label="Type a quantity"
      suffix="$"
    />
  )
}

export const PasswordVisibility = () => {
  const [inputField, setInputField] = React.useState('')

  return (
    <TextInput
      name={inputField}
      type="password"
      value={inputField}
      onChange={e => setInputField(e.target.value)}
      placeHolder="Your favorite food"
      showPasswordLabel="Show Password"
      hidePasswordLabel="Hide Password"
      label="Type a quantity"
    />
  )
}
