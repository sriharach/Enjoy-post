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
import React, { useEffect } from 'react'
import { styled } from '@mui/material/styles'
import { useForm } from 'react-hook-form'
import { Stack } from '@mui/system'
import { useNavigate } from 'react-router-dom'
import { v4 as uuid4 } from 'uuid'
import { useMutation } from '@tanstack/react-query'
import LoadingButton from '@mui/lab/LoadingButton'
import Inputwithlabel from '@/components/layouts/inputwithlabel'
import PasswordTextField from '@/components/common/passwordTextField'
import { LoginInterface } from '@/interfaces/login.interface'
import { LoginApi } from '@/services/auth-api'
import { accessTokenStore } from '@/helpers/local-storage'

const Login = () => {
  const navigate = useNavigate()
  const { register, handleSubmit, watch } = useForm<LoginInterface>()

  const { mutateAsync, isLoading } = useMutation(LoginApi)

  const handleSubmitForm = async (data: LoginInterface) => {
    const {
      items: { access_token },
    } = await mutateAsync(data)
    accessTokenStore.set(access_token)
    window.location.href = '/'
  }

  const handleConnectGoogle = () => {
    window.location.href =
      import.meta.env.VITE_APP_SERVICE_API +
      '/auth/oauth/login?state=' +
      uuid4()
  }

  useEffect(() => {
    if (accessTokenStore.load()) {
      navigate('/')
    }
  }, [accessTokenStore])

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
                  <TextField {...register('e_mail')} placeholder='username' />
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
                  disabled={!watch('e_mail') || !watch('password')}
                  loading={isLoading}
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
                <Button variant='outlined' onClick={handleConnectGoogle}>
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

const LoginButton = styled(LoadingButton)<SliderProps>(() => ({
  margin: '10px 0',
  color: '#fff',
  minWidth: 100,
}))
