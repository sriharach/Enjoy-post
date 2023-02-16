import { createTheme, ThemeProvider } from '@mui/material'
import { orange, red, grey } from '@mui/material/colors'
import React from 'react'

interface AppThemeProviderInterface {
  children: React.ReactNode
}

const AppThemeProvider = ({ children }: AppThemeProviderInterface) => {
  const theme = createTheme({
    palette: {
      primary: orange,
      secondary: grey,
      error: red,
    },
    typography: {
      fontFamily: 'kanit',
      fontSize: 14,
      fontWeightRegular: 400,
    },
  })

  return <ThemeProvider theme={theme}>{children}</ThemeProvider>
}

export default AppThemeProvider
