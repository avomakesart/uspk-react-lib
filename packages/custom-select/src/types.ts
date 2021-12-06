/* eslint-disable @typescript-eslint/no-explicit-any */

export interface Option {
  value: string | number | boolean
  label: string
  key?: string
}

export interface ICustomSelectProps {
  label?: string | undefined
  items: Option[]
  value: Option[]
  placeHolder?: string | undefined
  onChange?:  React.FormEventHandler | undefined;
}
