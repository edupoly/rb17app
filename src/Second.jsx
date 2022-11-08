import React from 'react'
import { Link, Outlet } from 'react-router-dom'

function Second() {
  return (
    <div className='border border-danger m-2 p-2'>
      <h1>Second</h1>
      <Link to="/xyz/first">First Component Load CHeyyß</Link>
      <Outlet></Outlet>
    </div>
  )
}

export default Second