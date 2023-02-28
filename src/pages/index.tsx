import { Button } from '@mui/material'
import React from 'react'

function Home() {
  return (
    <>
    <img src='' alt='img-google' />
      <Button
        variant='contained'
        onClick={() => {
          localStorage.clear()
          document.location.href = '/login'
        }}
      >
        Logout
      </Button>
    </>
  )
}

export default Home
