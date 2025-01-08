import { Button } from '@mui/material'
import React from 'react'

export default function Header() {
  return (
    <div className='min-h-12 bg-gray-400 flex justify-between items-center px-4 w-full' >
        <h3>Jikan</h3>
      <div className='flex gap-2'>
        <Button variant='outlined'>
          Register
        </Button>
        <Button variant='contained'>
          Login
        </Button>
      </div>
    </div>
  )
}
