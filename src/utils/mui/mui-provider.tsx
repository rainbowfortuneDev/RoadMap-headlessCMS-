import { useEffect } from 'react'

import { theme } from '../../styles/theme'

import type { PropsWithChildren } from 'react'
import { ThemeProvider } from '@mui/material'

import CssBaseline from '@mui/material/CssBaseline'

type MuiProviderProps = PropsWithChildren<unknown>

function MuiProvider({ children }: MuiProviderProps) {
  useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector('#jss-server-side')
    jssStyles?.parentElement?.removeChild(jssStyles)
  }, [])

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />

      {children}
    </ThemeProvider>
  )
}

export default MuiProvider
