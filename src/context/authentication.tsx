/* eslint-disable import/no-unresolved */
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
// import CircularProgress from '@mui/material/CircularProgress'
import { accessTokenStore } from '@/helpers/local-storage'

interface AuthenticationInterface {
  children: React.ReactNode
}

const Authentication = ({ children }: AuthenticationInterface) => {
  const navigate = useNavigate()
  const access_token = accessTokenStore.load()
  const [evenState] = useState([
    'load',
    'mousemove',
    'mousedown',
    'click',
    'scroll',
    'keypress',
  ])
  const [loadder, setLoadder] = useState(true)

  const logout = () => {
    localStorage.clear()
    document.location.href = '/login'
  }

  const autoLogout = () => {
    let timeout: NodeJS.Timeout

    const setTime = () => {
      timeout = setTimeout(() => {
        logout()
        clearTimeout(timeout)
      }, 1800000) // 1800000 = 30 min
    }
    for (const i in evenState) {
      /*ตรวจจับทุกอีเวน์ในการเคลื่อนไหว*/
      window.addEventListener(evenState[i], () => {
        clearTimeout(timeout)
        setTime()
      })
    }
  }

  // React.useEffect(() => {
  //   autoLogout()
  // }, [])

  React.useEffect(() => {
    if (access_token) return
    // setLoadder(boo => !boo)
    navigate('/login')
  }, [access_token])

  // if (loadder) {
  //   return <div />
  // }

  return <div>{children}</div>
}

export default Authentication
