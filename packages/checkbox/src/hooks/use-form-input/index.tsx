import { useState } from 'react'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const useFormInput = ({ valueProp, initialValue }: any) => {
  const [value, setValue] = useState(
    valueProp !== undefined ? valueProp : initialValue,
  )

  // Returns an array [value and function to set the value]
  return [
    valueProp !== undefined ? valueProp : value,
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (nextValue: any) => {
      if (initialValue !== undefined) setValue(nextValue)
    },
  ]
}
