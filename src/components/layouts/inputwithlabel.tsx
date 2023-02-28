/* eslint-disable import/no-unresolved */
import React from 'react'
import { Box, SliderProps, styled } from '@mui/material'
import { InputwithlabelInterface } from '@/interfaces/inputwithlabel.interface'

const Inputwithlabel = ({
  children,
  variant,
  label,
}: InputwithlabelInterface) => {
  return (
    <ContentInput variant={variant || 'vertical'}>
      <label>{label ?? ''}</label>
      {children}
    </ContentInput>
  )
}

export default Inputwithlabel

const ContentInput = styled(Box)<
  SliderProps & { variant: 'vertical' | 'horizontal' }
>(({ variant }) => ({
  display: 'flex',
  flexDirection: variant === 'vertical' ? 'column' : 'row',
}))
