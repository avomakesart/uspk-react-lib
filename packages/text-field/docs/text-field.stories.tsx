import React, { useState } from 'react';
import { TextField } from '../src';
import mdx from "./text-field.mdx"

export default {
  title: 'Components/TextField',
  parameters: {
    tags: ['text-field', 'uspk', 'react'],
    layout: 'centered',
    docs: {
      page: mdx,
    },
  },
};

export const DefaultTextField = () => {
  const [inputField, setInputField] = useState('I am doing great');

  return (
    <TextField
      name={inputField}
      type='text'
      value={inputField}
      onChange={(e) => setInputField(e.target.value)}
      label='How are you doing?'
      placeHolder='Type your feeling right here'
    />
  );
};

export const NumberField = () => {
  const [inputField, setInputField] = useState('25');

  return (
    <TextField
      name={inputField}
      type='number'
      value={inputField}
      onChange={(e) => setInputField(e.target.value)}
      label='How much is 5 + 5:'
      placeHolder='Your answer here'
    />
  );
};

export const EmailField = () => {
  const [inputField, setInputField] = useState('email@email.com');

  return (
    <TextField
      name={inputField}
      type='email'
      value={inputField}
      onChange={(e) => setInputField(e.target.value)}
      label='Email Address:'
      placeHolder='email@email.com'
    />
  );
};

export const PasswordField = () => {
    const [inputField, setInputField] = useState('');
  
    return (
      <TextField
        name={inputField}
        type='password'
        value={inputField}
        label='Password'
        onChange={(e) => setInputField(e.target.value)}
        placeHolder='*********'
      />
    );
  };

export const WithRequiredMark = () => {
    const [inputField, setInputField] = useState('John Doe');
  
    return (
      <TextField
        name={inputField}
        type='text'
        value={inputField}
        onChange={(e) => setInputField(e.target.value)}
        label='Tell us your name'
        required
        placeHolder='email@email.com'
      />
    );
  };

export const WithValidationError = () => {
    const [inputField, setInputField] = useState('');
  
    return (
      <TextField
        name={inputField}
        type='email'
        value={inputField}
        onChange={(e) => setInputField(e.target.value)}
        label='Email Address:'
        required
        error
        errorMessage='This is a required field'
        placeHolder='email@email.com'
      />
    );
  };

  export const DisabledTextField = () => {
    const [inputField, setInputField] = useState('');
  
    return (
      <TextField
        name={inputField}
        type='email'
        value={inputField}
        onChange={(e) => setInputField(e.target.value)}
        label='Email Address:'
        required
        disabled
        placeHolder='email@email.com'
      />
    );
  };

  export const WithoutLabel = () => {
    const [inputField, setInputField] = useState('');
  
    return (
      <TextField
        name={inputField}
        type='text'
        value={inputField}
        onChange={(e) => setInputField(e.target.value)}
        placeHolder='Your favorite food'
      />
    );
  };

