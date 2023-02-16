/* eslint-disable import/no-unresolved */
import {
  Box,
  Button,
  Card,
  TextField,
  SliderProps,
  Typography,
  Divider,
} from '@mui/material'
import React from 'react'
import { styled } from '@mui/material/styles'
import { useForm } from 'react-hook-form'
import { Stack } from '@mui/system'
import { useNavigate } from 'react-router-dom'
import Inputwithlabel from '@/components/layouts/inputwithlabel'
import PasswordTextField from '@/components/common/passwordTextField'
import { LoginInterface } from '@/interfaces/login-interface'

const Login = () => {
  const navigate = useNavigate()
  const { register, handleSubmit, watch } = useForm<LoginInterface>()

  const handleSubmitForm = (data: LoginInterface) => {
    console.log('data :>> ', data)
    localStorage.setItem('access_token', 'ed3f1381-81a6-45cd-8b9f-ff76ee1137fd')
    navigate('/')
  }

  return (
    <Box maxHeight='100vh'>
      <BoxContainer>
        <Card sx={{ width: 600, display: 'flex' }}>
          <Box>
            <ImageBG />
          </Box>
          <Content>
            <ContentTitle>
              <Typography gutterBottom variant='h5'>
                <b>We are WebPack</b>
              </Typography>
              <Typography variant='body1'>
                Welcome back! Log in to your account to view today&apos;s
                clients
              </Typography>
            </ContentTitle>
            <Form onSubmit={handleSubmit(handleSubmitForm)}>
              <ContentInput>
                <Inputwithlabel label='Username'>
                  <TextField {...register('username')} placeholder='username' />
                </Inputwithlabel>
              </ContentInput>
              <ContentInput>
                <Inputwithlabel label='Password'>
                  <PasswordTextField
                    {...register('password')}
                    placeholder='password'
                  />
                </Inputwithlabel>
                <Box component='p' textAlign='end'>
                  <Typography
                    component='a'
                    variant='body2'
                    sx={{ cursor: 'pointer' }}
                    color='#969595'
                  >
                    Forgot password
                  </Typography>
                </Box>
              </ContentInput>
              <Box sx={{ textAlign: 'end' }}>
                <LoginButton
                  type='submit'
                  variant='contained'
                  disabled={!watch('username') || !watch('password')}
                >
                  Log in
                </LoginButton>
              </Box>
            </Form>
            <Divider />
            <Stack spacing={1}>
              <Typography component='p' textAlign='center'>
                Login with
              </Typography>
              <Box component='p' textAlign='center'>
                <Button variant='outlined'>
                  <Box display='flex' columnGap={2}>
                    <img src='/images/google-logo.png' alt='icon-google' />
                    <span>Connect with google</span>
                  </Box>
                </Button>
              </Box>
            </Stack>
          </Content>
        </Card>
      </BoxContainer>
    </Box>
  )
}

export default Login

const BoxContainer = styled(Box)<SliderProps>(() => ({
  display: 'flex',
  width: '100vw',
  height: '100vh',
  justifyContent: 'center',
  alignItems: 'center',
  padding: 0,
  margin: 0,
}))

const ImageBG = styled(Box)<SliderProps>(() => ({
  backgroundImage:
    'url("https://images.pexels.com/photos/114979/pexels-photo-114979.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940")',
  width: 230,
  height: 'auto',
  minHeight: '100%',
  backgroundSize: 'cover',
}))

const Content = styled(Box)<SliderProps>(() => ({
  padding: '1rem',
  width: '100%',
  display: 'grid',
  rowGap: 12,
}))

const ContentTitle = styled(Box)<SliderProps>(() => ({
  display: 'flex',
  flexDirection: 'column',
  gap: 14,
}))

const ContentInput = styled(Box)<SliderProps>(() => ({
  display: 'flex',
  flexDirection: 'column',
}))

const Form = styled('form')(() => ({
  display: 'grid',
  rowGap: '1.4rem',
}))

const LoginButton = styled(Button)<SliderProps>(() => ({
  margin: '10px 0',
  color: '#fff',
  minWidth: 100,
}))
