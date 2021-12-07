import * as React from 'react'
import { Button } from '../../buttons/src'
import { CheckMark } from '../../buttons/src/assets/icons/checkmark'
import { Toast } from '../src/index'

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
  const [showSnack, setshowSnack] = React.useState(false)
  const [list] = React.useState([
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
