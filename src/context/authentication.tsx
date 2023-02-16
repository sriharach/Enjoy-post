import React from 'react'
import { useNavigate } from 'react-router-dom'

interface AuthenticationInterface {
  children: React.ReactNode
}

const Authentication = ({ children }: AuthenticationInterface) => {
  const navigate = useNavigate()
  const access_token = localStorage.getItem('access_token')
  React.useEffect(() => {
    if (access_token) return
    navigate('/login')
  }, [])

  return <div>{children}</div>
}

export default Authentication
