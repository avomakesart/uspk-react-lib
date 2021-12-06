import React, { useState } from 'react'
import { Button } from '../../buttons/src'
import { useSnackBars } from '../src/hooks/use-snackbars/index'
import { SnackBarProvider } from '../src/snack-bar-provider'
import { Toast } from '../src/index'
import { CheckMark } from '../../buttons/src/assets/icons/checkmark'

export default {
  title: 'Components/Snackbar',
  parameters: {
    tags: ['snackbar', 'uspk', 'react'],
    // docs: {
    //   page: mdx,
    // },
  },
}

export const Default = () => {
  const [showSnack, setshowSnack] = useState(false)
  const [list, setList] = React.useState([
    {
      id: 1,
      title: 'Success',
      description: 'This is a success toast component',
      backgroundColor: '#5cb85c',
      icon: CheckMark,
    },
  ])
  return (
    <>
      <Button primary type="button" onClick={() => setshowSnack(prev => !prev)}>
        Show toast
      </Button>

      {showSnack && (
        <Toast toastList={list} position="top-left" autoDelete={false} />
      )}
    </>
  )
}
