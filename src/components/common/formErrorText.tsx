import React from 'react'
import Stack from '@mui/material/Stack'
import ErrorOutlinedIcon from '@mui/icons-material/ErrorOutlined'
import { SxProps } from '@mui/material'

const FormErrorText = ({
  children,
  sx,
}: {
  children: React.ReactNode
  sx?: SxProps
}) => {
  return (
    <Stack
      component='span'
      direction='row'
      alignItems='center'
      spacing={1}
      sx={{ color: 'error.main', fontSize: { xs: 14, sm: 16 }, ...sx }}
    >
      <ErrorOutlinedIcon sx={{ alignSelf: 'baseline' }} />
      <span>{children}</span>
    </Stack>
  )
}

export default FormErrorText
