import React from 'react'
import TextField, { TextFieldProps } from '@mui/material/TextField'
import { InputProps } from '@mui/material/Input'
import VisibilityIcon from '@mui/icons-material/Visibility'
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff'

type PasswordTextFieldProps = Omit<TextFieldProps, 'InputProps'> & {
  InputProps?: Omit<InputProps, 'endAdornment'>
}

const PasswordTextFieldWithRef = (
  props: PasswordTextFieldProps,
  ref: React.ForwardedRef<JSX.Element>,
) => {
  const { InputProps, ...restProps } = props
  const [showPassword, setShowPassword] = React.useState(false)
  const revealPassword = () => {
    setShowPassword((prev) => !prev)
  }
  return (
    <TextField
      inputRef={ref}
      type={showPassword ? 'text' : 'password'}
      InputProps={{
        endAdornment: showPassword ? (
          <VisibilityOffIcon
            onClick={revealPassword}
            sx={{ cursor: 'pointer', color: '#C4C4C4' }}
          />
        ) : (
          <VisibilityIcon
            onClick={revealPassword}
            sx={{ cursor: 'pointer', color: '#C4C4C4' }}
          />
        ),
        ...InputProps,
      }}
      {...restProps}
    />
  )
}

const PasswordTextField = React.forwardRef(PasswordTextFieldWithRef)
export default PasswordTextField
