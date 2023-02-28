/* eslint-disable import/no-unresolved */
import { useEffect } from 'react'
import { useSearchParams, useNavigate } from 'react-router-dom'
import { useMutation } from '@tanstack/react-query'
import { CallbackLogin } from '@/services/auth-api'
import { accessTokenStore } from '@/helpers/local-storage'

const Oauth = () => {
  const [query] = useSearchParams()
  const navigate = useNavigate()

  const { mutate } = useMutation(CallbackLogin, {
    onError: (err) => {
      console.log('err :>> ', err)
    },
    onSuccess: (data) => {
      accessTokenStore.set(data.items.access_token)
      document.location.href = '/'
    },
  })

  const renderOauth = () => {
    if (!query.get('state') && query.get('code')) return navigate('/login')

    mutate({
      state: query.get('state') as string,
      code: query.get('code') as string,
    })
  }

  useEffect(() => {
    renderOauth()
  }, [query])

  return null
}

export default Oauth
