import { useContext } from 'react'

import { SnackBarContext } from '../../snack-bar-provider'

export const useSnackBars = () => useContext(SnackBarContext)
