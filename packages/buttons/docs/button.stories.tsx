import * as React from 'react';
import { Button } from '../src';
import mdx from "./button.mdx"

export default {
  title: 'Components/Button',
  parameters: {
    tags: ['button', 'uspk', 'react'],
    docs: {
      page: mdx,
    },
  },
};

export const Default = () => {
  return (
    <Button type='button' onClick={() => console.log('Hey dude')}>
      Click me!
    </Button>
  );
};

export const Primary = () => {
  return (
    <Button type='button' primary onClick={() => console.log('Hey dude')}>
      Click me!
    </Button>
  );
};

export const Secondary = () => {
  return (
    <Button type='button' secondary onClick={() => console.log('Hey dude')}>
      Click me!
    </Button>
  );
};

export const Disabled = () => {
  return (
    <Button type='button' disabled onClick={() => console.log('Hey dude')}>
      Click me!
    </Button>
  );
};

export const CustomBackground = () => {
  return (
    <Button
      type='button'
      backgroundColor='rgba(67, 56, 202, 1)'
      onClick={() => console.log('Hey dude')}
    >
      Click me!
    </Button>
  );
};
