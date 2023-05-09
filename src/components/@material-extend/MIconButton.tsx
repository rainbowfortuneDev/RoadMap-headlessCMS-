import { IconButtonProps } from '@mui/material'
import IconButton from '@mui/material/IconButton'

import { forwardRef } from 'react'
// material
//

// ----------------------------------------------------------------------

// eslint-disable-next-line no-use-before-define
const MIconButton = forwardRef<HTMLButtonElement, IconButtonProps>(
  ({ children, ...other }, ref) => (
    <IconButton ref={ref} {...other}>
      {children}
    </IconButton>
  )
)
MIconButton.displayName = 'MIconButton'

export default MIconButton
